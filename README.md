# POLIVIA — Site vitrine premium (V1)

Projet Next.js 16 / React 19 / TypeScript, livré avec une page d’accueil, portfolio, fiches projets, pages services, page future plateforme, contact, mentions légales et politique de confidentialité. Visuels de portefeuille abstraits et créations CSS : aucune fausse capture d’écran n’est présentée comme un projet livré.

## Démarrage

```bash
npm install
cp .env.example .env.local
npm run dev
```

Ouvrir http://localhost:3000.

## Contact — mise en service obligatoire

1. Ouvrir un compte Resend et **vérifier un domaine d’envoi**.
2. Renseigner `RESEND_API_KEY`, `CONTACT_TO_EMAIL`, `CONTACT_FROM_EMAIL` dans `.env.local` ou dans les variables d’environnement Vercel.
3. Tester une demande : réception, réponse, gestion des erreurs.
4. Ajouter une protection anti-spam robuste / limitation de débit (par exemple WAF ou Upstash Redis) avant ouverture publique intensive. Le champ piège actuel n’est qu’une première protection.

**Le formulaire refuse honnêtement les envois lorsque les secrets ne sont pas configurés (HTTP 503).** Aucune demande n’est enregistrée ou prétendument envoyée dans ce cas.

## Avant déploiement

- Confirmer le domaine et configurer `NEXT_PUBLIC_SITE_URL` pour sitemap et URLs canoniques. Sans domaine configuré, le site est volontairement marqué `noindex`.
- Remplir toutes les valeurs entre crochets dans les mentions légales et la confidentialité, contrôler le RGPD et les sous-traitants.
- Remplacer les identifiants et captures illustratives des réalisations par des actifs authentiques, après accord de publication des clients.
- Valider les statuts des projets et les autorisations de citation des marques.
- Remplacer les visuels CSS par les captures réelles et photos sous licence si désiré.
- Vérifier les coordonnées réelles avant publication.
- Vérifier sur mobile, audits Lighthouse, accessibilité, sécurité, fonctionnement des envois et liens.

## Déployer sur Vercel

Importer ce dépôt sur Vercel, configurer le domaine et les variables d’environnement, puis lancer un déploiement. Le dépôt est indépendant de toute plateforme SaaS ou infrastructure ICOS ; il pourra ultérieurement pointer vers un espace client sans migrations destructives.

## Structure

- `app/page.tsx` : accueil
- `app/realisations` : projets et fiches
- `app/services` : prestations et fiches
- `app/plateforme` : vision SaaS, clairement annoncée non disponible
- `app/contact` : formulaire qualifiant
- `app/api/contact/route.ts` : envoi d’email via Resend
- `lib/data.ts` : données éditoriales, réalisations, services
- `app/globals.css` : design system responsive
- `public/maquette-reference.png` : maquette fournie comme inspiration et archive, pas affichée dans le site

## Limites honnêtes

Il s’agit d’un **site source publiable après configuration**, pas d’une production déjà déployée ni d’un SaaS fonctionnel. Les données du dashboard sont fictives et explicitement identifiées. Les captures authentiques, l’identité légale complète, le domaine, les secrets de messagerie et les autorisations client ne peuvent pas être devinés.
