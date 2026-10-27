<?php
// Receives project inquiries from the site's contact dialog and emails them
// to the studio. Runs on Hostinger's PHP; replaces the PocketBase backend
// the site had on Hostinger Horizons.

declare(strict_types=1);

const RECIPIENT = 'contact@kreativid.com';
// Must be a mailbox on the kreativid.com domain, or the email gets flagged as spam.
const SENDER = 'contact@kreativid.com';
const ALLOWED_HOSTS = ['kreativid.com', 'www.kreativid.com'];
const MAX_PER_HOUR = 5;

header('Content-Type: application/json; charset=utf-8');
header('Cache-Control: no-store');
header('X-Content-Type-Options: nosniff');

function respond(int $status, array $body): void
{
    http_response_code($status);
    echo json_encode($body);
    exit;
}

if (($_SERVER['REQUEST_METHOD'] ?? '') !== 'POST') {
    respond(405, ['error' => 'Method not allowed']);
}

// Only accept submissions coming from the site itself.
$origin = $_SERVER['HTTP_ORIGIN'] ?? '';
if ($origin !== '' && !in_array(parse_url($origin, PHP_URL_HOST), ALLOWED_HOSTS, true)) {
    respond(403, ['error' => 'Forbidden']);
}

// Simple per-IP rate limit, stored in the system temp directory.
$ip = $_SERVER['REMOTE_ADDR'] ?? 'unknown';
$rateFile = sys_get_temp_dir() . '/kreativid_contact_' . md5($ip);
$now = time();
$hits = [];
if (is_file($rateFile)) {
    $hits = array_filter(
        array_map('intval', explode(',', (string) file_get_contents($rateFile))),
        fn (int $t) => $t > $now - 3600
    );
}
if (count($hits) >= MAX_PER_HOUR) {
    respond(429, ['error' => 'Too many requests, please try again later']);
}

$raw = file_get_contents('php://input', false, null, 0, 20000);
$data = json_decode((string) $raw, true);
if (!is_array($data)) {
    respond(400, ['error' => 'Invalid JSON body']);
}

$field = fn (string $key, int $max): string => mb_substr(trim((string) ($data[$key] ?? '')), 0, $max);
// Strip line breaks from anything that ends up in a mail header.
$oneLine = fn (string $value): string => str_replace(["\r", "\n"], ' ', $value);

$name = $oneLine($field('name', 120));
$email = $oneLine($field('email', 254));
$phone = $oneLine($field('phone', 40));
$preferred = $field('preferredContact', 10) === 'phone' ? 'phone' : 'email';
$service = $oneLine($field('service', 120));
$message = $field('message', 5000);

if ($name === '' || $service === '' || mb_strlen($message) < 10 || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
    respond(400, ['error' => 'Missing or invalid fields']);
}

$safe = fn (string $value): string => htmlspecialchars($value, ENT_QUOTES, 'UTF-8');

$html = '<h2>New project inquiry</h2>'
    . '<p><strong>Name:</strong> ' . $safe($name) . '</p>'
    . '<p><strong>Email:</strong> ' . $safe($email) . '</p>'
    . '<p><strong>Phone:</strong> ' . ($phone !== '' ? $safe($phone) : '—') . '</p>'
    . '<p><strong>Preferred contact:</strong> ' . $safe($preferred) . '</p>'
    . '<p><strong>Project focus:</strong> ' . $safe($service) . '</p>'
    . '<p><strong>Message:</strong></p>'
    . '<p>' . nl2br($safe($message)) . '</p>';

$subject = '=?UTF-8?B?' . base64_encode('New project inquiry from ' . $name) . '?=';
$headers = implode("\r\n", [
    'MIME-Version: 1.0',
    'Content-Type: text/html; charset=UTF-8',
    'From: KreativID <' . SENDER . '>',
    'Reply-To: ' . $email,
]);

if (!mail(RECIPIENT, $subject, $html, $headers, '-f' . SENDER)) {
    error_log('KreativID contact: mail() failed for inquiry from ' . $email);
    respond(500, ['error' => 'Could not send your message']);
}

$hits[] = $now;
@file_put_contents($rateFile, implode(',', $hits));

respond(200, ['ok' => true]);
