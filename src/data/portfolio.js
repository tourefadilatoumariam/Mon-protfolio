// Navigation
export const navLinks = [
  { href: '#home', id: 'home', label: 'Accueil' },
  { href: '#services', id: 'services', label: 'Services' },
  { href: '#portfolio', id: 'portfolio', label: 'Portfolio' },
  { href: '#about', id: 'about', label: 'A propos' },
  { href: '#blog', id: 'blog', label: 'Blog' },
  { href: '#contact', id: 'contact', label: 'Contact' },
]

// Hero slides
export const slides = [
  {
    tag: 'Stage / Alternance / Premier emploi',
    title: 'Toure Fadilatou<br><em>Mariam</em>',
    desc: "Developpeuse passionnee par le fullstack : interfaces modernes avec Vue.js / React, APIs robustes avec NestJS / Laravel et bases MySQL / MongoDB. Je cree des produits numeriques solides et maintenables.",
    bg: 'linear-gradient(135deg,#0d1220 0%,#18223f 50%,#0f172a 100%)',
    accent: '#a0b4d4',
    photoGradient: 'linear-gradient(160deg,#1a1a3a,#2a2a5a)',
    cta1: { label: 'Mes services', href: '#services' },
    cta2: { label: 'Voir mes projets', href: '#portfolio' },
  },
  {
    tag: 'Developpeuse Fullstack Junior',
    title: 'Je conçois des applications<br><em>claires et utiles</em>',
    desc: "Du frontend Vue.js / React au backend NestJS / Laravel, j'assemble des produits complets : interfaces reactives, APIs documentées, bases de donnees optimisees et deploiement en production.",
    bg: 'linear-gradient(135deg,#120d10 0%,#2d1525 52%,#111827 100%)',
    accent: '#d4a0b0',
    photoGradient: 'linear-gradient(160deg,#2d1525,#4a1f35)',
    cta1: { label: 'Voir mes projets', href: '#portfolio' },
    cta2: { label: 'Telecharger mon CV', href: '#cv', isCv: true },
  },
  {
    tag: 'Disponible a Abidjan et a distance',
    title: 'Collaborons sur<br>un projet<br><em>concret</em>',
    desc: "Site vitrine, dashboard, API, application mobile ou prototype UI : je peux vous aider a passer de l'idee a une solution testable.",
    bg: 'linear-gradient(135deg,#0d1a0f 0%,#122615 50%,#111827 100%)',
    accent: '#a0d4b4',
    photoGradient: 'linear-gradient(160deg,#122615,#1e3d22)',
    cta1: { label: 'Demarrer un projet', href: '#contact' },
    cta2: { label: 'Voir le portfolio', href: '#portfolio' },
  },
]

// Stats
export const stats = [
  { value: '15+', label: 'Projets academiques et personnels' },
  { value: '4', label: 'Domaines techniques pratiques' },
  { value: '24h', label: 'Delai de reponse moyen' },
  { value: 'CI', label: 'Abidjan / Teletravail' },
]

// Services
export const services = [
  {
    icon: 'web',
    title: 'Developpement Web',
    tag: 'Sites vitrines & web apps',
    desc: 'Interfaces responsives avec Vue.js, React et Tailwind CSS, construites pour etre claires sur mobile comme sur desktop.',
  },
  {
    icon: 'mobile',
    title: 'Applications Mobile',
    tag: 'Parcours simples',
    desc: 'Prototypes et applications React Native avec navigation lisible, ecrans utiles et logique metier facile a tester.',
  },
  {
    icon: 'design',
    title: 'UI/UX Design',
    tag: 'Figma & ergonomie',
    desc: "Maquettes, composants reutilisables et parcours utilisateurs pour transformer une idee en experience coherente.",
  },
  {
    icon: 'backend',
    title: 'API & Backend',
    tag: 'Donnees & integration',
    desc: 'APIs REST, authentification, bases MySQL ou MongoDB et endpoints propres pour connecter les interfaces au metier.',
  },
]

// Projects
export const projects = [
  {
    title: 'MY SHOP',
    cat: 'Web App',
    desc: "DEV_SHOP - Boutique e-commerce complète avec catalogue de produits classés par rayon (Tech, Mode, Maison), filtrage dynamique, panier persistant et tunnel de connexion/inscription réactif.",
    stack: ['Vue.js', 'Tailwind CSS', 'JavaScript'],
    status: 'Projet de groupe',
    image: '/project-my-shop.png',
    liveUrl: 'https://myshop-production-17be.up.railway.app/',
    accent: '#d4a0b0',
  },
  {
    title: 'FreeAds',
    cat: 'Web App',
    desc: "Plateforme d'annonces classées avec gestion des comptes utilisateurs, création/modification d'annonces, téléversement de photos et messagerie interne. Backend Laravel robuste.",
    stack: ['Laravel', 'MySQL', 'Tailwind CSS'],
    status: 'Projet de groupe',
    image: '/project-freeads.png',
    liveUrl: '',
    accent: '#a0b4d4',
  },
  {
    title: 'Post-it',
    cat: 'Web App',
    desc: "Application interactive de notes rapides (pense-bêtes) utilisant Vue.js et l'API LocalStorage pour la persistance des données. Interface minimaliste et responsive.",
    stack: ['Vue.js', 'LocalStorage', 'CSS'],
    status: 'Projet individuel',
    image: '/project-post-it.jpeg',
    liveUrl: 'https://post-it-murex.vercel.app/',
    accent: '#a0d4b4',
  },
  {
    title: 'Yowl',
    cat: 'Web App',
    desc: "Dashboard d'administration et de gestion financière avec des graphiques interactifs pour le suivi des transactions et soldes. Redesign ergonomique complet.",
    stack: ['Figma', 'Laravel', 'Vue.js', 'MySQL'],
    status: 'Projet de groupe',
    image: '',
    liveUrl: '',
    accent: '#d4c0a0',
  },
  {
    title: 'Trelltech',
    cat: 'Backend',
    desc: "API REST sécurisée inspirée de Trello avec authentification par JWT, validation des schémas, gestion de bases de données collaboratives et documentation d'API complète.",
    stack: ['NestJS', 'JWT', 'MongoDB'],
    status: 'Projet de groupe',
    image: '/project-trelltech.jpeg',
    liveUrl: '',
    accent: '#b0a0d4',
  },
  {
    title: 'Showtime',
    cat: 'Web App',
    desc: "Global Tickets - Plateforme de réservation et d'achat de billets d'événements (Concerts, Festivals, Sports, Théâtre). Recherche avancée multi-critères, espace favoris et billetterie interactive.",
    stack: ['React', 'Tailwind CSS', 'MySQL'],
    status: 'Projet de groupe',
    image: '/project-showtime.png',
    liveUrl: 'https://show-time-production-f143.up.railway.app/',
    accent: '#d4a0a0',
  },
  {
    title: 'My Rotten Tomatoes',
    cat: 'Web App',
    desc: "Catalogue d'exploration de films avec moteur de recherche, filtres par catégorie, notation et affichage détaillé des fiches de films connectées à une API cinéma.",
    stack: ['JavaScript', 'API', 'CSS'],
    status: 'Projet de groupe',
    image: '/project-movies.png',
    liveUrl: '',
    accent: '#a0d4cf',
  },
]

export const filterCategories = ['Tous', 'Web App', 'Mobile', 'UI/UX', 'Backend']

// Skills
export const skills = [
  { name: 'Vue.js', cat: 'Frontend', icon: 'devicon-vuejs-plain colored', level: 5, label: 'Avance' },
  { name: 'React', cat: 'Frontend', icon: 'devicon-react-original colored', level: 4, label: 'Avance' },
  { name: 'Next.js', cat: 'Frontend', icon: 'devicon-nextjs-plain', level: 3, label: 'Intermediaire' },
  { name: 'TypeScript', cat: 'Frontend', icon: 'devicon-typescript-plain colored', level: 3, label: 'Intermediaire' },
  { name: 'JavaScript', cat: 'Frontend', icon: 'devicon-javascript-plain colored', level: 5, label: 'Avance' },
  { name: 'HTML / CSS', cat: 'Frontend', icon: 'devicon-html5-plain colored', level: 5, label: 'Avance' },
  { name: 'Tailwind CSS', cat: 'Frontend', icon: 'devicon-tailwindcss-original colored', level: 4, label: 'Avance' },
  { name: 'NestJS', cat: 'Backend', icon: 'devicon-nestjs-plain colored', level: 4, label: 'Avance' },
  { name: 'PHP', cat: 'Backend', icon: 'devicon-php-plain colored', level: 3, label: 'Intermediaire' },
  { name: 'Laravel', cat: 'Backend', icon: 'devicon-laravel-original colored', level: 3, label: 'Intermediaire' },
  { name: 'Python', cat: 'Backend', icon: 'devicon-python-plain colored', level: 3, label: 'Intermediaire' },
  { name: 'Flask', cat: 'Backend', icon: 'devicon-flask-original', level: 3, label: 'Intermediaire' },
  { name: 'Express.js', cat: 'Backend', icon: 'devicon-express-original', level: 3, label: 'Intermediaire' },
  { name: 'FastAPI', cat: 'Backend', icon: 'devicon-fastapi-plain colored', level: 2, label: 'Debutant' },
  { name: 'Docker', cat: 'Outils', icon: 'devicon-docker-plain colored', level: 2, label: 'Debutant' },
  { name: 'React Native', cat: 'Mobile', icon: 'devicon-react-original colored', level: 4, label: 'Avance' },
  { name: 'MySQL', cat: 'Base de donnees', icon: 'devicon-mysql-plain colored', level: 4, label: 'Avance' },
  { name: 'MongoDB', cat: 'Base de donnees', icon: 'devicon-mongodb-plain colored', level: 3, label: 'Intermediaire' },
  { name: 'Figma', cat: 'Design', icon: 'devicon-figma-plain colored', level: 4, label: 'Avance' },
  { name: 'PowerPoint', cat: 'Design', icon: 'powerpoint', level: 5, label: 'Avance' },
  { name: 'Word', cat: 'Design', icon: 'word', level: 5, label: 'Avance' },
  { name: 'Canva', cat: 'Design', icon: 'canva', level: 5, label: 'Avance' },
  { name: 'Git', cat: 'Outils', icon: 'devicon-git-plain colored', level: 4, label: 'Avance' },
  { name: 'GitHub', cat: 'Outils', icon: 'devicon-github-original', level: 4, label: 'Avance' },
  { name: 'Postman', cat: 'Outils', icon: 'devicon-postman-plain colored', level: 4, label: 'Avance' },
  { name: 'API REST', cat: 'Architecture', icon: 'api', level: 4, label: 'Avance' },
  { name: 'Microservices', cat: 'Architecture', icon: 'microservices', level: 3, label: 'Intermediaire' },
]

export const skillCategories = [
  'Tous',
  'Frontend',
  'Backend',
  'Mobile',
  'Base de donnees',
  'Design',
  'Outils',
  'Architecture',
]

export const skillHighlights = [
  'Interfaces web responsives',
  'APIs REST et authentification',
  'Maquettes Figma exploitables',
  'Collaboration Git / GitHub',
]

// Blog posts
export const posts = [
  {
    date: 'Juin 2026',
    cat: 'Certification',
    title: 'Certification en bases de la securite de l information',
    excerpt: "Une etape de plus dans ma progression : comprendre les bons reflexes de securite, la protection des donnees et les pratiques utiles dans un projet web.",
    link: 'https://www.linkedin.com/posts/fadilatou-mariam-toure-858899348_completion-certificate-for-basic-information-activity-7350562304381394946-B8SX?utm_source=share&utm_medium=member_android&rcm=ACoAAFb7-oQBOljX8u1HNYYdbfV2FrjfKaTXbjg',
    image: '/blog-tech-cybersecurity.png',
  },
  {
    date: 'Mai 2026',
    cat: 'Backend',
    title: 'Ce que je verifie avant de livrer une API',
    excerpt: "Validation, authentification, messages d'erreur et documentation : les reflexes qui rendent un backend plus fiable et plus simple a reprendre.",
    link: '#contact',
    image: '/blog-tech-code.png',
  },
  {
    date: 'Mars 2026',
    cat: 'Parcours',
    title: 'Mes debuts avec la formation Wecode',
    excerpt: "J'ai commence Wecode avec beaucoup de curiosite, en decouvrant les bases du developpement web et la logique qui se cache derriere chaque interface.",
    link: 'https://www.linkedin.com/posts/fadilatou-mariam-toure-858899348_wecode-daezveloppementweb-html-ugcPost-7438827420213870592-4k-K/?utm_source=share&utm_medium=member_android&rcm=ACoAAFb7-oQBOljX8u1HNYYdbfV2FrjfKaTXbjg',
    image: '/blog-tech-developer.png',
  },
]

// Contact info
export const contactInfos = [
  { icon: 'map-pin', label: 'Localisation', value: "Abidjan, Cote d'Ivoire" },
  { icon: 'mail', label: 'Email', value: 'tourefadilatoumariam@gmail.com' },
  { icon: 'phone', label: 'Telephone', value: '+225 07 13 21 29 36' },
]

// Socials
export const socials = [
  { label: 'linkedin', href: 'https://www.linkedin.com/in/fadilatou-mariam-toure-858899348/', title: 'LinkedIn' },
  { label: 'github', href: 'https://github.com/', title: 'GitHub' },
]