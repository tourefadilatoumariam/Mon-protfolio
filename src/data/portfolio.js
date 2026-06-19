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
    tag: 'Developpeuse Fullstack Junior',
    title: 'Je conçois des applications<br><em>claires et utiles</em>',
    desc: "Je transforme des besoins metier en interfaces soignées, APIs fiables et experiences web fluides avec Vue.js, React, NestJS et Laravel.",
    bg: 'linear-gradient(135deg,#120d10 0%,#2d1525 52%,#111827 100%)',
    accent: '#d4a0b0',
    photoGradient: 'linear-gradient(160deg,#2d1525,#4a1f35)',
    cta1: { label: 'Voir mes projets', href: '#portfolio' },
    cta2: { label: 'Telecharger mon CV', href: '#cv', isCv: true },
  },
  {
    tag: 'Stage / Alternance / Premier emploi',
    title: 'Touré Fadilatou<br><em>Mariam</em>',
    desc: "Basée à Abidjan, je recherche une opportunité où contribuer vite, apprendre avec exigence et construire des produits numériques bien finis.",
    bg: 'linear-gradient(135deg,#0d1220 0%,#18223f 50%,#0f172a 100%)',
    accent: '#a0b4d4',
    photoGradient: 'linear-gradient(160deg,#1a1a3a,#2a2a5a)',
    cta1: { label: 'Mes services', href: '#services' },
    cta2: { label: 'Me contacter', href: '#contact' },
  },
  {
    tag: 'Disponible a Abidjan et a distance',
    title: 'Collaborons sur<br>un projet<br><em>concret</em>',
    desc: "Site vitrine, dashboard, API, application mobile ou prototype UI : je peux vous aider à passer de l'idée à une solution testable.",
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
  { value: '5', label: 'Domaines techniques pratiques' },
  { value: '24h', label: 'Delai de reponse moyen' },
  { value: 'CI', label: 'Abidjan / Teletravail' },
]

// Services
export const services = [
  {
    icon: 'web',
    title: 'Developpement Web',
    desc: 'Sites et applications responsives avec Vue.js, React, Tailwind CSS et une attention forte portee aux details UI.',
  },
  {
    icon: 'mobile',
    title: 'Applications Mobile',
    desc: 'Prototypes et applications cross-platform avec React Native, pensees pour des parcours simples et efficaces.',
  },
  {
    icon: 'design',
    title: 'UI/UX Design',
    desc: "Maquettes Figma, parcours utilisateurs, composants reutilisables et interfaces lisibles pour faciliter l'adoption.",
  },
  {
    icon: 'backend',
    title: 'API & Backend',
    desc: 'APIs REST, authentification, bases de donnees MySQL/MongoDB et integration propre avec les interfaces frontend.',
  },
]

// Projects
export const projects = [
  {
    title: 'MY SHOP',
    cat: 'Web App',
    desc: "Boutique e-commerce responsive pour presenter des articles, filtrer un catalogue et preparer un tunnel d'achat clair.",
    stack: ['Vue.js', 'Tailwind', 'JavaScript'],
    status: 'Projet de groupe',
    image: '/project-my-shop.svg',
    liveUrl: '',
    bg: 'linear-gradient(135deg,#111827,#4a2040)',
  },
  {
    title: 'FreeAds',
    cat: 'Web App',
    desc: "Plateforme de petites annonces avec espace utilisateur, publication d'offres et parcours de recherche simplifie.",
    stack: ['Laravel', 'MySQL', 'Bootstrap'],
    status: 'Projet de groupe',
    image: '/project-freeads.svg',
    liveUrl: '',
    bg: 'linear-gradient(135deg,#1a0a1a,#6b2060)',
  },
  {
    title: 'Post-it',
    cat: 'Mobile',
    desc: 'Application de notes pour creer, organiser et retrouver rapidement des pense-betes du quotidien.',
    stack: ['Vue.js', 'LocalStorage', 'CSS'],
    status: 'Projet individuel',
    image: '/project-post-it.svg',
    liveUrl: '',
    bg: 'linear-gradient(135deg,#0a1a1a,#1a4a40)',
  },
  {
    title: 'Yowl',
    cat: 'UI/UX',
    desc: "Redesign d'une interface de gestion financiere avec une navigation plus lisible et des ecrans plus coherents.",
    stack: ['Figma', 'Design System', 'UX'],
    status: 'Projet de groupe',
    image: '/project-yowl.svg',
    liveUrl: '',
    bg: 'linear-gradient(135deg,#1a0a0a,#5a2020)',
  },
  {
    title: 'Trelltech',
    cat: 'Backend',
    desc: 'API REST avec authentification JWT, structure modulaire et endpoints pour gerer des ressources collaboratives.',
    stack: ['NestJS', 'JWT', 'MongoDB'],
    status: 'Projet de groupe',
    image: '/project-trelltech.svg',
    liveUrl: '',
    bg: 'linear-gradient(135deg,#0a0a1a,#20205a)',
  },
  {
    title: 'Showtime',
    cat: 'Web App',
    desc: "Interface de gestion RH pour suivre les employes, organiser les informations et fluidifier les operations internes.",
    stack: ['React', 'API REST', 'MySQL'],
    status: 'Projet de groupe',
    image: '/project-showtime.svg',
    liveUrl: '',
    bg: 'linear-gradient(135deg,#1a0d14,#4a1535)',
  },
  {
    title: 'My Rotten Tomatoes',
    cat: 'Web App',
    desc: 'Catalogue de films avec recherche, notation et pages detaillees pour explorer des contenus cinematographiques.',
    stack: ['JavaScript', 'API', 'CSS'],
    status: 'Projet de groupe',
    image: '/project-movies.svg',
    liveUrl: '',
    bg: 'linear-gradient(135deg,#111827,#2f4858)',
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

// Blog posts
export const posts = [
  {
    date: 'Juin 2026',
    cat: 'Vue.js',
    title: 'Structurer un portfolio Vue proprement',
    excerpt: 'Composants, donnees centralisees et petites animations : une base simple pour un site evolutif.',
    bg: 'linear-gradient(135deg,#1a0d14,#3a1a2a)',
  },
  {
    date: 'Mai 2026',
    cat: 'Backend',
    title: 'Ce que je verifie avant de livrer une API',
    excerpt: 'Validation, authentification, messages d erreur et documentation : les reflexes qui rendent un backend plus fiable.',
    bg: 'linear-gradient(135deg,#0d1220,#1a2040)',
  },
  {
    date: 'Avr. 2026',
    cat: 'UI/UX',
    title: 'Rendre une interface plus lisible',
    excerpt: 'Hierarchie visuelle, espacements et etats interactifs : quelques decisions qui changent la perception d une app.',
    bg: 'linear-gradient(135deg,#0a1a0f,#142a18)',
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
  { label: 'linkedin', href: 'https://linkedin.com/in/', title: 'LinkedIn' },
  { label: 'github', href: 'https://github.com/', title: 'GitHub' },
]
