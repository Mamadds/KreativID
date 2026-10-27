import { ArrowDown, ArrowUpRight, Sparkles } from 'lucide-react';
import { useI18n } from '@/lib/i18n';

export function Hero({ onStart }: { onStart: () => void }) {
  const { t } = useI18n();
  return <section className="hero" aria-labelledby="hero-title">
    <div className="hero-topline"><span><i className="status-dot" /> {t.hero.topline1}</span><span>{t.hero.topline2}</span></div>
    <div className="hero-headline"><h1 id="hero-title">{t.hero.title1}<br /><span>{t.hero.title2}</span> {t.hero.title3}<span className="period">.</span></h1><div className="orbit-mark" aria-hidden="true"><Sparkles strokeWidth={1.15} /><span>{t.hero.orbit}</span></div></div>
    <div className="hero-bottom"><p>{t.hero.desc}</p><button className="button button-blue" onClick={onStart}>{t.hero.cta} <ArrowUpRight size={19} /></button><a className="explore-link" href="#work">{t.hero.explore1}<br /><strong>{t.hero.explore2}</strong><span><ArrowDown size={19} /></span></a></div>
    <div className="hero-playground" aria-label="A creative mix of mobile product design and brand identity">
      <div className="playground-caption"><span>{t.hero.caption1}</span><span>{t.hero.caption2}</span></div>
      <div className="brand-object"><span className="mini-label">{t.hero.brandLabel}</span><div className="loop-word">loop<span>®</span></div><div className="brand-bottom"><span>{t.hero.brandTagline1}<br />{t.hero.brandTagline2}</span><span className="asterisk">✳</span></div></div>
      <div className="phone-object"><div className="phone-top"><span>9:41</span><span>••• ▰</span></div><div className="phone-greeting">{t.hero.phoneGreeting1}<br /><strong>{t.hero.phoneGreeting2}</strong></div><div className="phone-art"><div /><span>↗</span></div><div className="phone-task"><span>{t.hero.phoneTaskLabel}</span><strong>{t.hero.phoneTaskTitle1}<br />{t.hero.phoneTaskTitle2}</strong><div className="task-progress"><i /></div><small>{t.hero.phoneTaskProgress}</small></div><div className="phone-nav"><span>⌂</span><span>＋</span><span>◉</span></div></div>
      <div className="floating-note"><Sparkles size={15} /><span>{t.hero.floatingNote}</span></div>
      <div className="dashboard-object"><div className="dashboard-header"><strong><span className="tiny-logo">n</span> nook.</strong><span>{t.hero.dashTagline} <i /></span></div><div className="dashboard-body"><div className="dashboard-side"><span className="selected">{t.hero.dashOverview}</span><span>{t.hero.dashProjects}</span><span>{t.hero.dashSpace}</span><span>{t.hero.dashInsights}</span><div className="side-decoration">✳</div></div><div className="dashboard-main"><small>{t.hero.dashGreeting1}</small><h3>{t.hero.dashGreeting2}</h3><div className="dashboard-metrics"><div><small>{t.hero.dashMetric1Label}</small><strong>12 <span>↗</span></strong></div><div><small>{t.hero.dashMetric2Label}</small><strong>∞</strong></div></div><div className="chart-title"><span>{t.hero.dashChartTitle}</span><small>{t.hero.dashChartSub}</small></div><div className="chart"><i /><i /><i /><i /><i /><i /><i /></div><div className="chart-labels">{t.hero.days.map((d, i) => <span key={i}>{d}</span>)}</div></div></div></div>
      <div className="playground-foot"><span>{t.hero.foot1}</span><span>{t.hero.foot2}</span></div>
    </div>
  </section>;
}
