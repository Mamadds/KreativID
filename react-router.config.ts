import type { Config } from '@react-router/dev/config';

// Static site: the home page is pre-rendered to HTML at build time, so the
// output in build/client/ can be uploaded as-is to Hostinger's public_html.
export default {
	appDirectory: 'src',
	buildDirectory: 'build',
	ssr: false,
	prerender: ['/'],
} satisfies Config;
