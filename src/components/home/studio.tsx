import { ArrowUpRight } from 'lucide-react';
import { useI18n } from '@/lib/i18n';

export function Studio() {
  const { t } = useI18n();
  return <section id="about" className="studio-section section-rail"><div className="section-label"><span>{t.studio.label1}</span><span>{t.studio.label2}</span></div><div className="studio-grid"><div className="studio-aside"><div className="studio-symbol" aria-hidden="true">✳</div><span>{t.studio.aside}</span></div><div><h2>{t.studio.title1}<br />{t.studio.title2}<br /><span>{t.studio.title3}</span></h2><div className="studio-copy"><p>{t.studio.copy}</p><a href="#expertise">{t.studio.link} <ArrowUpRight size={18} /></a></div></div></div></section>;
}
