import { useI18n } from '@/lib/i18n';

export function SiteFooter() {
  const { t } = useI18n();
  return <footer className="site-footer"><div><a className="wordmark" href="#">Kreativ<span>ID</span><i /></a><p>{t.footer.tagline}</p></div><nav aria-label="Footer navigation"><a href="#about">{t.header.studio}</a><a href="#expertise">{t.header.expertise}</a><a href="#work">{t.header.work}</a></nav><div className="footer-note"><span>{t.footer.note}</span><span>© {new Date().getUTCFullYear()} KreativID</span></div></footer>;
}
