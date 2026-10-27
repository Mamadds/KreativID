import {
	createContext,
	useContext,
	useState,
	useEffect,
	type ReactNode,
} from 'react';

export type Lang = 'en' | 'fr';

const en = {
	header: {
		studio: 'The studio',
		expertise: 'What we do',
		work: 'Our playground',
		cta: 'Let’s create',
	},
	hero: {
		topline1: 'INDEPENDENT DIGITAL & BRAND STUDIO',
		topline2: 'IDEAS IN MOTION. ALWAYS.',
		title1: 'Big ideas.',
		title2: 'Beautifully',
		title3: 'built',
		orbit: 'THINK · MAKE · REPEAT ·',
		desc: 'We turn your next big thing into intuitive mobile apps, smart SaaS, and brands with a personality of their own.',
		cta: 'Got an idea? Let’s talk',
		explore1: 'A little less talk.',
		explore2: 'A little more creation.',
		caption1: 'FROM THE FIRST SPARK',
		caption2: 'TO THE FINAL PIXEL ↗',
		brandLabel: 'A LITTLE BRAND MAGIC',
		brandTagline1: 'Less ordinary.',
		brandTagline2: 'More you.',
		phoneGreeting1: 'Make room for',
		phoneGreeting2: 'your next idea.',
		phoneTaskLabel: 'YOUR DAILY SPACE',
		phoneTaskTitle1: 'A little progress,',
		phoneTaskTitle2: 'every day.',
		phoneTaskProgress: '3 of 5 goals complete',
		floatingNote: 'Made to feel different.',
		dashTagline: 'YOUR IDEAS, CONNECTED',
		dashOverview: 'Overview',
		dashProjects: 'Projects',
		dashSpace: 'Your space',
		dashInsights: 'Insights',
		dashGreeting1: 'MONDAY LOOKS GOOD ON YOU',
		dashGreeting2: 'Hello, creative.',
		dashMetric1Label: 'Ideas in motion',
		dashMetric2Label: 'Room to grow',
		dashChartTitle: 'A week of good things',
		dashChartSub: 'This week ↗',
		foot1: 'BRAND THINKING × PRODUCT THINKING',
		foot2: 'THE KREATIVID WAY',
		days: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
	},
	studio: {
		label1: '01 / THE STUDIO',
		label2: 'A SMALL STUDIO. A WIDE-OPEN MIND.',
		aside: 'Curiosity is our starting point.',
		title1: 'Good technology.',
		title2: 'Great personality.',
		title3: 'Why choose?',
		copy: 'At KreativID, we connect the dots between how something works and how it makes you feel. Because the best digital experiences aren’t just useful. They’re unmistakably yours.',
		link: 'Meet your creative toolkit',
	},
	expertise: {
		label1: '02 / WHAT WE DO',
		label2: 'DIFFERENT SKILLS. ONE CREATIVE MINDSET.',
		title1: 'Your idea.',
		title2: 'Our kind of thing.',
		intro1: 'From a fresh identity to your next digital product.',
		intro2: 'We bring the creative and the technical together.',
		startProject: 'Start a project',
		services: [
			{
				number: '01',
				title: 'Mobile, made human.',
				category: 'MOBILE APPLICATIONS',
				description:
					'From the first tap to the everyday habit. Thoughtfully designed mobile experiences that make complex things feel simple.',
				tags: ['iOS & Android', 'UX / UI design', 'Prototyping'],
				icon: 'mobile',
			},
			{
				number: '02',
				title: 'Big vision. Smart SaaS.',
				category: 'SAAS & WEB PRODUCTS',
				description:
					'Turn a promising idea into a product people love to use. Flexible platforms, clear interfaces, and room to grow.',
				tags: ['Product strategy', 'Web applications', 'Design systems'],
				icon: 'saas',
			},
			{
				number: '03',
				title: 'A brand that’s all you.',
				category: 'BRAND & VISUAL IDENTITY',
				description:
					'More than a good-looking logo. A distinct visual world that gives your business a voice, a feeling, and a place of its own.',
				tags: ['Brand strategy', 'Visual identity', 'Art direction'],
				icon: 'brand',
			},
		],
	},
	work: {
		label1: '03 / OUR PLAYGROUND',
		label2: 'A GLIMPSE OF WHAT COULD BE.',
		title: 'Different by design',
		intro1: 'Ideas we’re exploring.',
		intro2: 'Concepts, not client commissions.',
		concept: 'CONCEPT',
		loopLabel: 'IDENTITY EXPLORATION / 01',
		loopTagline: 'Make everyday a little less ordinary.',
		loopFoot: 'GOOD ENERGY. ON REPEAT.',
		loopTitle: 'Loop — good energy, on repeat.',
		loopMeta: 'Brand strategy · Visual identity',
		loopAria: 'Discuss a brand identity like Loop',
		flowLabel: 'PRODUCT EXPLORATION / 02',
		flowText1: 'Less noise.',
		flowText2: 'More flow.',
		flowSub: 'YOUR SPACE TO SLOW DOWN',
		flowTitle1: 'One thing at a time.',
		flowCircleLabel: 'TAKE A BREATH',
		flowStart: 'Find your focus ↗',
		flowTitle: 'Flow — a little space for you.',
		flowMeta: 'Mobile application · UX / UI',
		flowAria: 'Discuss a mobile application like Flow',
	},
	process: {
		label1: '04 / HOW WE MAKE IT HAPPEN',
		label2: 'FLEXIBLE BY NATURE.',
		title1: 'No black box.',
		title2: 'Just good collaboration.',
		copy: 'A clear process, an open conversation, and plenty of room for the unexpected. We shape the way we work around what your idea needs.',
		steps: [
			{
				number: '01',
				title: 'Find the spark.',
				description:
					'We listen, ask the right questions, and get to the heart of your idea.',
			},
			{
				number: '02',
				title: 'Make it tangible.',
				description:
					'We explore, sketch, and prototype. You’re part of the conversation, not waiting on the sidelines.',
			},
			{
				number: '03',
				title: 'Build it right.',
				description:
					'Design and development come together, with the details getting the attention they deserve.',
			},
			{
				number: '04',
				title: 'Keep it moving.',
				description:
					'Launch is a beginning. We help you learn, refine, and make your next move.',
			},
		],
	},
	contact: {
		label1: '05 / YOUR MOVE',
		label2: 'START WITH A WHAT IF.',
		title1: 'Your next big thing',
		title2: 'starts with hello.',
		copy: 'A mobile app? A bold new brand? Something we haven’t imagined yet? We’re all ears. Let’s make something worth making.',
	},
	footer: {
		tagline: 'Creative minds. Digital possibilities.',
		note: 'Made with intention.',
	},
	dialog: {
		label: 'LET’S FIND YOUR STARTING POINT',
		title1: 'Big things start',
		title2: 'with a little idea',
		desc: 'Tell us about your idea and how to reach you. We’ll get back to you — by email or phone, your call.',
		serviceLabel: 'What are you thinking about?',
		nameLabel: 'Your name',
		namePlaceholder: 'Jane Doe',
		emailLabel: 'Email',
		emailPlaceholder: 'jane@example.com',
		phoneLabel: 'Phone (optional)',
		phonePlaceholder: '+1 555 000 1234',
		preferredLabel: 'Preferred way to be reached',
		preferredEmail: 'Email',
		preferredPhone: 'Phone',
		options: [
			'Mobile application',
			'SaaS & web product',
			'Brand & visual identity',
			'A bit of everything',
		],
		ideaLabel: 'Tell us about your idea',
		placeholder: 'What would you love to create? Who is it for?',
		note: 'We’ll only use your details to reply about your project.',
		submit: 'Send my inquiry',
		submitting: 'Sending…',
		submitSuccess: 'Thanks! Your idea just landed with us. We’ll be in touch soon.',
		submitError: 'Something went wrong sending your inquiry. Please try again.',
		sendAnother: 'Send another inquiry',
		downloadBrief: 'Download a copy of my brief',
		download: 'Download my brief',
		downloadAgain: 'Download again',
		success: 'Your brief is ready. A good first step toward something great.',
		link: 'Still exploring? See what we do',
		briefTitle: 'KreativID — Project starter',
		briefFocus: 'Project focus:',
		briefIdea: 'The idea:',
		briefQuestions: 'Questions to explore next:',
		briefQ1: 'Who is this for?',
		briefQ2: 'What should it help them do?',
		briefQ3: 'What would a great first version look like?',
		briefQ4: 'What is your ideal timeline?',
	},
};

export type Dict = typeof en;

const fr: Dict = {
	header: {
		studio: 'Le studio',
		expertise: 'Notre savoir-faire',
		work: 'Nos créations',
		cta: 'Créons ensemble',
	},
	hero: {
		topline1: 'STUDIO DIGITAL & BRAND INDÉPENDANT',
		topline2: 'DES IDÉES EN MOUVEMENT. TOUJOURS.',
		title1: 'De grandes idées.',
		title2: 'Magnifiquement',
		title3: 'construites',
		orbit: 'PENSER · CRÉER · RÉPÉTER ·',
		desc: 'Nous transformons votre prochaine grande idée en applications mobiles intuitives, en SaaS intelligents et en marques avec une personnalité bien à elles.',
		cta: 'Une idée ? Parlons-en',
		explore1: 'Un peu moins de mots.',
		explore2: 'Un peu plus de création.',
		caption1: 'DE LA PREMIÈRE ÉTINCELLE',
		caption2: 'AU DERNIER PIXEL ↗',
		brandLabel: 'UN PEU DE MAGIE DE MARQUE',
		brandTagline1: 'Moins ordinaire.',
		brandTagline2: 'Plus vous.',
		phoneGreeting1: 'Faites de la place à',
		phoneGreeting2: 'votre prochaine idée.',
		phoneTaskLabel: 'VOTRE ESPACE QUOTIDIEN',
		phoneTaskTitle1: 'Un peu de progrès,',
		phoneTaskTitle2: 'chaque jour.',
		phoneTaskProgress: '3 objectifs sur 5 atteints',
		floatingNote: 'Conçu pour se démarquer.',
		dashTagline: 'VOS IDÉES, CONNECTÉES',
		dashOverview: 'Aperçu',
		dashProjects: 'Projets',
		dashSpace: 'Votre espace',
		dashInsights: 'Analyses',
		dashGreeting1: 'LE LUNDI VOUS VA BIEN',
		dashGreeting2: 'Bonjour, créatif.',
		dashMetric1Label: 'Idées en mouvement',
		dashMetric2Label: 'De la marge pour grandir',
		dashChartTitle: 'Une semaine de belles choses',
		dashChartSub: 'Cette semaine ↗',
		foot1: 'PENSÉE DE MARQUE × PENSÉE PRODUIT',
		foot2: 'À LA KREATIVID',
		days: ['L', 'M', 'M', 'J', 'V', 'S', 'D'],
	},
	studio: {
		label1: '01 / LE STUDIO',
		label2: 'UN PETIT STUDIO. L’ESPRIT GRAND OUVERT.',
		aside: 'La curiosité est notre point de départ.',
		title1: 'De la bonne technologie.',
		title2: 'Une belle personnalité.',
		title3: 'Pourquoi choisir ?',
		copy: 'Chez KreativID, nous relions les points entre le fonctionnement d’une chose et ce qu’elle vous fait ressentir. Parce que les meilleures expériences numériques ne sont pas seulement utiles. Elles sont indéniablement les vôtres.',
		link: 'Découvrez votre boîte à outils créative',
	},
	expertise: {
		label1: '02 / NOTRE SAVOIR-FAIRE',
		label2: 'DES COMPÉTENCES VARIÉES. UN SEUL ESPRIT CRÉATIF.',
		title1: 'Votre idée.',
		title2: 'Notre domaine.',
		intro1: 'D’une identité renouvelée à votre prochain produit numérique.',
		intro2: 'Nous réunissons le créatif et le technique.',
		startProject: 'Démarrer un projet',
		services: [
			{
				number: '01',
				title: 'Le mobile, plus humain.',
				category: 'APPLICATIONS MOBILES',
				description:
					'Du premier tactile à l’habitude quotidienne. Des expériences mobiles pensées avec soin qui rendent les choses complexes simples.',
				tags: ['iOS & Android', 'UX / UI design', 'Prototypage'],
				icon: 'mobile',
			},
			{
				number: '02',
				title: 'Grande vision. SaaS malin.',
				category: 'SAAS & PRODUITS WEB',
				description:
					'Transformez une idée prometteuse en un produit que les gens adorent utiliser. Des plateformes flexibles, des interfaces claires et de la marge pour grandir.',
				tags: ['Stratégie produit', 'Applications web', 'Design systems'],
				icon: 'saas',
			},
			{
				number: '03',
				title: 'Une marque 100 % vous.',
				category: 'MARQUE & IDENTITÉ VISUELLE',
				description:
					'Plus qu’un joli logo. Un univers visuel distinct qui donne à votre entreprise une voix, un ressenti et une place à part.',
				tags: ['Stratégie de marque', 'Identité visuelle', 'Direction artistique'],
				icon: 'brand',
			},
		],
	},
	work: {
		label1: '03 / NOS CRÉATIONS',
		label2: 'UN APERÇU DE CE QUI POURRAIT ÊTRE.',
		title: 'Différent par design',
		intro1: 'Des idées que nous explorons.',
		intro2: 'Des concepts, pas des commandes clients.',
		concept: 'CONCEPT',
		loopLabel: 'EXPLORATION D’IDENTITÉ / 01',
		loopTagline: 'Rendre chaque jour un peu moins ordinaire.',
		loopFoot: 'BONNE ÉNERGIE. EN BOUCLE.',
		loopTitle: 'Loop — bonne énergie, en boucle.',
		loopMeta: 'Stratégie de marque · Identité visuelle',
		loopAria: 'Discuter d’une identité de marque comme Loop',
		flowLabel: 'EXPLORATION PRODUIT / 02',
		flowText1: 'Moins de bruit.',
		flowText2: 'Plus de flow.',
		flowSub: 'VOTRE ESPACE POUR RALENTIR',
		flowTitle1: 'Une chose à la fois.',
		flowCircleLabel: 'RESPIREZ',
		flowStart: 'Trouvez votre focus ↗',
		flowTitle: 'Flow — un petit espace pour vous.',
		flowMeta: 'Application mobile · UX / UI',
		flowAria: 'Discuter d’une application mobile comme Flow',
	},
	process: {
		label1: '04 / COMMENT ON SE DÉPLOIE',
		label2: 'FLEXIBLE PAR NATURE.',
		title1: 'Pas de boîte noire.',
		title2: 'Juste une bonne collaboration.',
		copy: 'Un processus clair, une conversation ouverte et beaucoup de place pour l’imprévu. Nous adaptons notre façon de travailler aux besoins de votre idée.',
		steps: [
			{
				number: '01',
				title: 'Trouver l’étincelle.',
				description:
					'Nous écoutons, posons les bonnes questions et allons au cœur de votre idée.',
			},
			{
				number: '02',
				title: 'Le rendre concret.',
				description:
					'Nous explorons, croquons et prototypons. Vous faites partie de la conversation, pas en attente sur le banc de touche.',
			},
			{
				number: '03',
				title: 'Bien le construire.',
				description:
					'Design et développement se rejoignent, les détails recevant l’attention qu’ils méritent.',
			},
			{
				number: '04',
				title: 'Le faire avancer.',
				description:
					'Le lancement est un début. Nous vous aidons à apprendre, affiner et préparer votre prochain mouvement.',
			},
		],
	},
	contact: {
		label1: '05 / À VOUS DE JOUER',
		label2: 'COMMENCEZ PAR UN « ET SI ».',
		title1: 'Votre prochain grand projet',
		title2: 'commence par un bonjour.',
		copy: 'Une application mobile ? Une nouvelle marque audacieuse ? Quelque chose que nous n’avons pas encore imaginé ? Nous sommes tout ouïe. Créons quelque chose qui en vaut la peine.',
	},
	footer: {
		tagline: 'Esprits créatifs. Possibilités numériques.',
		note: 'Fait avec intention.',
	},
	dialog: {
		label: 'TROUVONS VOTRE POINT DE DÉPART',
		title1: 'Les grandes choses commencent',
		title2: 'par une petite idée',
		desc: 'Parlez-nous de votre idée et de la façon de vous joindre. Nous reviendrons vers vous — par email ou par téléphone, comme vous préférez.',
		serviceLabel: 'À quoi pensez-vous ?',
		nameLabel: 'Votre nom',
		namePlaceholder: 'Jean Dupont',
		emailLabel: 'Email',
		emailPlaceholder: 'jean@exemple.com',
		phoneLabel: 'Téléphone (facultatif)',
		phonePlaceholder: '+33 6 12 34 56 78',
		preferredLabel: 'Votre moyen de contact préféré',
		preferredEmail: 'Email',
		preferredPhone: 'Téléphone',
		options: [
			'Application mobile',
			'SaaS & produit web',
			'Marque & identité visuelle',
			'Un peu de tout',
		],
		ideaLabel: 'Parlez-nous de votre idée',
		placeholder: 'Qu’aimeriez-vous créer ? Pour qui ?',
		note: 'Nous utilisons vos coordonnées uniquement pour vous répondre au sujet de votre projet.',
		submit: 'Envoyer ma demande',
		submitting: 'Envoi…',
		submitSuccess: 'Merci ! Votre idée vient de nous parvenir. Nous vous recontactons très vite.',
		submitError: 'Une erreur est survenue lors de l’envoi. Veuillez réessayer.',
		sendAnother: 'Envoyer une autre demande',
		downloadBrief: 'Télécharger une copie de mon brief',
		download: 'Télécharger mon brief',
		downloadAgain: 'Télécharger à nouveau',
		success: 'Votre brief est prêt. Un bon premier pas vers quelque chose de grand.',
		link: 'Toujours en exploration ? Découvrez notre savoir-faire',
		briefTitle: 'KreativID — Démarrage de projet',
		briefFocus: 'Objectif du projet :',
		briefIdea: 'L’idée :',
		briefQuestions: 'Questions à explorer ensuite :',
		briefQ1: 'Pour qui est-ce ?',
		briefQ2: 'Que devrait-ce leur permettre de faire ?',
		briefQ3: 'À quoi ressemblerait une belle première version ?',
		briefQ4: 'Quel est votre calendrier idéal ?',
	},
};

export const translations: Record<Lang, Dict> = { en, fr };

interface I18nContextValue {
	lang: Lang;
	setLang: (lang: Lang) => void;
	t: Dict;
}

const I18nContext = createContext<I18nContextValue | null>(null);

export function I18nProvider({ children }: { children: ReactNode }) {
	const [lang, setLangState] = useState<Lang>('en');

	useEffect(() => {
		try {
			const saved = localStorage.getItem('kreativid-lang');
			if (saved === 'fr' || saved === 'en') setLangState(saved);
		} catch {
			/* ignore */
		}
	}, []);

	useEffect(() => {
		document.documentElement.lang = lang;
		try {
			localStorage.setItem('kreativid-lang', lang);
		} catch {
			/* ignore */
		}
	}, [lang]);

	return (
		<I18nContext.Provider
			value={{ lang, setLang: setLangState, t: translations[lang] }}
		>
			{children}
		</I18nContext.Provider>
	);
}

export function useI18n() {
	const ctx = useContext(I18nContext);
	if (!ctx) throw new Error('useI18n must be used within an I18nProvider');
	return ctx;
}
