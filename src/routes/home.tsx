import { useState } from 'react';
import type { Route } from './+types/home';
import { seo } from '@/lib/seo';
import { I18nProvider } from '@/lib/i18n';
import { SiteHeader } from '@/components/site-header';
import { SiteFooter } from '@/components/site-footer';
import { ProjectDialog } from '@/components/project-dialog';
import { Hero } from '@/components/home/hero';
import { Studio } from '@/components/home/studio';
import { Expertise } from '@/components/home/expertise';
import { Work } from '@/components/home/work';
import { Process } from '@/components/home/process';
import { Contact } from '@/components/home/contact';

export function meta({ location }: Route.MetaArgs) {
  return seo({ location }, { title: 'KreativID — Big ideas. Beautifully built.', description: 'An independent creative technology studio bringing mobile applications, SaaS products, and memorable brand identities to life.' });
}

export default function HomePage() {
  const [open, setOpen] = useState(false);
  const onStart = () => setOpen(true);
  return <I18nProvider><SiteHeader onStart={onStart} /><main><Hero onStart={onStart} /><Studio /><Expertise onStart={onStart} /><Work onStart={onStart} /><Process /><Contact onStart={onStart} /></main><SiteFooter /><ProjectDialog open={open} onClose={() => setOpen(false)} /></I18nProvider>;
}
