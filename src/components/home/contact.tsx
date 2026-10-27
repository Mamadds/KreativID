import { ArrowUpRight } from 'lucide-react';
import { useI18n } from '@/lib/i18n';

export function Contact({ onStart }: { onStart: () => void }) {
  const { t } = useI18n();
  return <section id="contact" className="contact-section"><div className="section-label"><span>{t.contact.label1}</span><span>{t.contact.label2}</span></div><div className="contact-main"><h2>{t.contact.title1}<br /><span>{t.contact.title2}</span></h2><button onClick={onStart} aria-label={t.header.cta}><ArrowUpRight strokeWidth={1.3} /></button></div><p>{t.contact.copy}</p></section>;
}
