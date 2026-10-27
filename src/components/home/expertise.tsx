import { ArrowUpRight, Smartphone, PanelsTopLeft, PenTool } from 'lucide-react';
import { useI18n } from '@/lib/i18n';

export function Expertise({ onStart }: { onStart: () => void }) {
  const { t } = useI18n();
  return <section id="expertise" className="expertise-section section-rail"><div className="section-label"><span>{t.expertise.label1}</span><span>{t.expertise.label2}</span></div><div className="section-heading"><h2>{t.expertise.title1}<br /><span>{t.expertise.title2}</span></h2><p>{t.expertise.intro1}<br />{t.expertise.intro2}</p></div><div className="service-list">{t.expertise.services.map(service => { const Icon = service.icon === 'mobile' ? Smartphone : service.icon === 'saas' ? PanelsTopLeft : PenTool; return <article className="service-row" key={service.number}><span className="service-number">{service.number}</span><div className="service-name"><span className="mini-label">{service.category}</span><h3>{service.title}</h3></div><div className="service-description"><p>{service.description}</p><div className="tags">{service.tags.map(tag => <span key={tag}>{tag}</span>)}</div></div><button className="service-action" onClick={onStart} aria-label={`${t.expertise.startProject}: ${service.category.toLowerCase()}`}><Icon size={25} strokeWidth={1.4} /><ArrowUpRight size={20} /></button></article>; })}</div></section>;
}
