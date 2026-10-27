import { useEffect, useRef, useState } from 'react';
import { ArrowUpRight, Check, Download, Loader2, X } from 'lucide-react';
import { useI18n } from '@/lib/i18n';

// Handled by public/contact.php, which emails the inquiry to the studio.
const CONTACT_ENDPOINT = '/contact.php';

export function ProjectDialog({ open, onClose }: { open: boolean; onClose: () => void }) {
  const { t } = useI18n();
  const ref = useRef<HTMLDialogElement>(null);
  const [serviceIdx, setServiceIdx] = useState(0);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [preferred, setPreferred] = useState<'email' | 'phone'>('email');
  const [idea, setIdea] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');
  const [downloaded, setDownloaded] = useState(false);

  useEffect(() => {
    if (open) {
      ref.current?.showModal();
      setSubmitted(false);
      setError('');
      setDownloaded(false);
    } else {
      ref.current?.close();
    }
  }, [open]);

  async function submitInquiry(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (submitting) return;
    setSubmitting(true);
    setError('');
    try {
      const response = await fetch(CONTACT_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: name.trim(),
          email: email.trim(),
          phone: phone.trim(),
          preferredContact: preferred,
          service: t.dialog.options[serviceIdx],
          message: idea.trim(),
        }),
      });
      if (!response.ok) throw new Error(`Contact request failed: ${response.status}`);
      setSubmitted(true);
      setDownloaded(false);
    } catch {
      setError(t.dialog.submitError);
    } finally {
      setSubmitting(false);
    }
  }

  function downloadBrief() {
    const service = t.dialog.options[serviceIdx];
    const content = `${t.dialog.briefTitle}\n\n${t.dialog.briefFocus} ${service}\n\n${t.dialog.briefIdea}\n${idea.trim()}\n\n${t.dialog.briefQuestions}\n- ${t.dialog.briefQ1}\n- ${t.dialog.briefQ2}\n- ${t.dialog.briefQ3}\n- ${t.dialog.briefQ4}\n`;
    const url = URL.createObjectURL(new Blob([content], { type: 'text/plain;charset=utf-8' }));
    const link = document.createElement('a');
    link.href = url;
    link.download = 'kreativid-project-brief.txt';
    link.click();
    URL.revokeObjectURL(url);
    setDownloaded(true);
  }

  function resetForm() {
    setName('');
    setEmail('');
    setPhone('');
    setIdea('');
    setServiceIdx(0);
    setPreferred('email');
    setSubmitted(false);
    setError('');
    setDownloaded(false);
  }

  return (
    <dialog
      ref={ref}
      className="project-dialog"
      onCancel={onClose}
      onClick={event => {
        if (event.target === event.currentTarget) onClose();
      }}
      aria-labelledby="brief-title"
    >
      <div className="dialog-content">
        <button className="dialog-close" onClick={onClose} aria-label="Close project planner">
          <X size={22} />
        </button>
        <span className="mini-label">{t.dialog.label}</span>
        <h2 id="brief-title">
          {t.dialog.title1}
          <br />
          {t.dialog.title2}
          <span className="period">.</span>
        </h2>
        <p>{t.dialog.desc}</p>

        {submitted ? (
          <div className="dialog-success">
            <span className="dialog-success-icon">
              <Check size={26} strokeWidth={2} />
            </span>
            <p role="status" className="dialog-success-text">
              {t.dialog.submitSuccess}
            </p>
            <button className="button button-blue" type="button" onClick={downloadBrief}>
              {t.dialog.downloadBrief} <Download size={18} />
            </button>
            {downloaded && <p className="download-success">{t.dialog.success}</p>}
            <button className="dialog-again" type="button" onClick={resetForm}>
              {t.dialog.sendAnother}
            </button>
          </div>
        ) : (
          <form onSubmit={submitInquiry}>
            <label htmlFor="service">{t.dialog.serviceLabel}</label>
            <select
              id="service"
              value={serviceIdx}
              onChange={event => {
                setServiceIdx(Number(event.target.value));
              }}
            >
              {t.dialog.options.map((option, idx) => (
                <option key={idx} value={idx}>
                  {option}
                </option>
              ))}
            </select>

            <div className="dialog-row">
              <div>
                <label htmlFor="name">{t.dialog.nameLabel}</label>
                <input
                  id="name"
                  type="text"
                  required
                  maxLength={120}
                  value={name}
                  onChange={event => setName(event.target.value)}
                  placeholder={t.dialog.namePlaceholder}
                />
              </div>
              <div>
                <label htmlFor="email">{t.dialog.emailLabel}</label>
                <input
                  id="email"
                  type="email"
                  required
                  value={email}
                  onChange={event => setEmail(event.target.value)}
                  placeholder={t.dialog.emailPlaceholder}
                />
              </div>
            </div>

            <label htmlFor="phone">{t.dialog.phoneLabel}</label>
            <input
              id="phone"
              type="tel"
              maxLength={40}
              value={phone}
              onChange={event => setPhone(event.target.value)}
              placeholder={t.dialog.phonePlaceholder}
            />

            <label htmlFor="preferred">{t.dialog.preferredLabel}</label>
            <select
              id="preferred"
              value={preferred}
              onChange={event => setPreferred(event.target.value as 'email' | 'phone')}
            >
              <option value="email">{t.dialog.preferredEmail}</option>
              <option value="phone">{t.dialog.preferredPhone}</option>
            </select>

            <label htmlFor="idea">{t.dialog.ideaLabel}</label>
            <textarea
              id="idea"
              required
              minLength={10}
              maxLength={5000}
              value={idea}
              onChange={event => setIdea(event.target.value)}
              placeholder={t.dialog.placeholder}
              rows={4}
            />
            <small>{t.dialog.note}</small>

            <button className="button button-blue" type="submit" disabled={submitting}>
              {submitting ? t.dialog.submitting : t.dialog.submit}
              {submitting ? (
                <Loader2 size={18} className="spin" />
              ) : (
                <ArrowUpRight size={18} />
              )}
            </button>
            {error && (
              <p role="alert" className="dialog-error">
                {error}
              </p>
            )}
          </form>
        )}

        <a className="dialog-link" href="#expertise" onClick={onClose}>
          {t.dialog.link} <ArrowUpRight size={16} />
        </a>
      </div>
    </dialog>
  );
}
