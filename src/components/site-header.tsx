import { useState } from 'react';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import { useI18n } from '@/lib/i18n';

export function SiteHeader({ onStart }: { onStart: () => void }) {
  const [open, setOpen] = useState(false);
  const { t, lang, setLang } = useI18n();
  return <header className="site-header">
    <a className="wordmark" href="#" aria-label="KreativID home">Kreativ<span>ID</span><i /></a>
    <nav className={open ? 'navigation is-open' : 'navigation'} aria-label="Main navigation">
      <a href="#about" onClick={() => setOpen(false)}>{t.header.studio}</a>
      <a href="#expertise" onClick={() => setOpen(false)}>{t.header.expertise}</a>
      <a href="#work" onClick={() => setOpen(false)}>{t.header.work}</a>
    </nav>
    <button className="lang-toggle" onClick={() => setLang(lang === 'en' ? 'fr' : 'en')} aria-label={lang === 'en' ? 'Passer en français' : 'Switch to English'}>{lang === 'en' ? 'FR' : 'EN'}</button>
    <button className="header-cta" onClick={onStart}>{t.header.cta} <ArrowUpRight size={17} /></button>
    <button className="menu-toggle" aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open} onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button>
  </header>;
}
