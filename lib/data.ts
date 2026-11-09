export const site = {
  brand: 'POLIVIA', email: 'contact@votre-domaine.fr',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://example.com',
  tagline: 'Le digital haut de gamme, pensé pour vendre.',
};
export type Project = {
 slug:string; name:string; category:string; state:'Publié'|'En développement'|'Concept de refonte';
 summary:string; description:string; services:string[]; photo:string; live?:string; accent:string;
};
export const projects:Project[] = [
 {slug:'lds-renov',name:'LDS Rénov',category:'Site premium · Rénovation',state:'Publié',summary:'Valoriser le savoir-faire d’une entreprise de rénovation et faciliter la prise de contact.',description:'Une présence web structurée autour de l’expertise, des prestations et des zones d’intervention. Les résultats de trafic ou de conversion ne sont pas affichés sans données vérifiées.',services:['Site vitrine','Structure SEO locale','Parcours de contact'],photo:'house',live:'https://www.lds-renov.fr/',accent:'gold'},
 {slug:'renaissance',name:'Renaissance',category:'Plateforme de formation',state:'En développement',summary:'Conception d’un écosystème digital autour de la formation, des parcours et d’un annuaire national.',description:'Un projet de plateforme avec espaces candidats, formateurs et administration, suivi des formations, communauté et annuaire public. Présenté ici comme travail en cours, non comme produit livré.',services:['Expérience utilisateur','Architecture de plateforme','Design système'],photo:'interior',accent:'copper'},
 {slug:'clikeco',name:'Clikeco',category:'Concept de refonte · Corporate',state:'Concept de refonte',summary:'Direction artistique et exploration d’une expérience digitale corporate haut de gamme.',description:'Travail conceptuel de refonte d’interface. Cette page présente une proposition créative, sans prétendre à une livraison officielle ni à une commande définitivement validée.',services:['Direction artistique','Concept UX/UI','Prototype visuel'],photo:'architecture',accent:'green'}
];
export const offers = [
 {slug:'creation-site-internet',eyebrow:'01 / WEB',name:'Création de sites internet',short:'Une vitrine remarquable. Un outil commercial performant.',desc:'Nous concevons des sites internet sur mesure qui réunissent direction artistique, architecture claire, rapidité et parcours de conversion. Chaque projet est conçu autour de votre activité.',points:['Direction artistique sur mesure','Expérience responsive','Performance et accessibilité','Fondations SEO','Mise en ligne et accompagnement']},
 {slug:'refonte-site-internet',eyebrow:'02 / REPOSITIONNEMENT',name:'Refonte de sites web',short:'Faites évoluer votre image, pas seulement votre interface.',desc:'Nous repensons la structure, le design et les parcours de votre site pour mieux traduire la valeur de votre entreprise et rendre l’expérience plus efficace.',points:['Audit du site existant','Architecture et contenus','Nouvelle identité digitale','Redirections et continuité SEO','Déploiement maîtrisé']},
 {slug:'referencement-seo',eyebrow:'03 / VISIBILITÉ',name:'Référencement SEO',short:'Soyez trouvé par les clients qui vous recherchent.',desc:'Nous construisons une stratégie de visibilité durable fondée sur vos marchés, vos services et vos zones d’intervention, sans promettre de positionnement garanti.',points:['Audit SEO technique','SEO local et pages de services','Structuration sémantique','Optimisation de contenus','Suivi des indicateurs']},
 {slug:'automatisation-ia',eyebrow:'04 / INNOVATION',name:'Automatisation & IA',short:'Moins de tâches répétitives. Plus de temps utile.',desc:'Nous connectons vos outils et concevons des workflows adaptés à votre activité. Des systèmes d’assistance peuvent accélérer le traitement des demandes tout en conservant un contrôle humain.',points:['Analyse des processus','Automatisation des flux','Intégrations CRM et métiers','Assistants et agents IA','Sécurité et supervision']}
];
