import { useI18n } from '@/lib/i18n';

export function Process() {
  const { t } = useI18n();
  return <section className="process-section section-rail"><div className="section-label"><span>{t.process.label1}</span><span>{t.process.label2}</span></div><div className="process-layout"><div className="process-intro"><h2>{t.process.title1}<br /><span>{t.process.title2}</span></h2><p>{t.process.copy}</p><div className="process-mark" aria-hidden="true">↗</div></div><div className="process-steps">{t.process.steps.map(step => <article key={step.number}><span>{step.number}</span><div><h3>{step.title}</h3><p>{step.description}</p></div></article>)}</div></div></section>;
}
