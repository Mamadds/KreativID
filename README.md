# KreativID — kreativid.com

Site vitrine du studio KreativID. Exporté de Hostinger Horizons le 27/10/2026 puis simplifié en **site statique** hébergé sur Hostinger (offre Business).

## Structure

| Dossier / fichier | Rôle |
|---|---|
| `src/routes/home.tsx` | La page d'accueil (assemble les sections) |
| `src/components/home/` | Les sections : hero, studio, expertise, work, process, contact |
| `src/components/project-dialog.tsx` | Le formulaire « Let's create » |
| `src/lib/i18n.tsx` | **Tous les textes du site**, en anglais et en français |
| `src/index.css` | Les styles |
| `public/contact.php` | Reçoit le formulaire et l'envoie par email à contact@kreativid.com |
| `public/.htaccess` | Redirection HTTPS, cache, page 404 |
| `public/robots.txt`, `public/sitemap.xml` | Référencement |

## Travailler en local

Prérequis : Node.js 24.

```bash
npm install        # une seule fois
npm run dev        # site en direct sur http://localhost:3000
npm run build      # génère le site final dans build/client/
npm run preview    # affiche build/client/ sur http://localhost:3000
```

Le formulaire de contact ne fonctionne pas en local (il faut le PHP de Hostinger) : il affiche une erreur, c'est normal.

## Mise en ligne

1. On modifie le code, puis `git commit` et `git push` sur la branche `main`.
2. GitHub Actions (`.github/workflows/deploy.yml`) construit le site et publie `build/client/` sur la branche `deploy`.
3. Hostinger (hPanel → Sites web → Avancé → **Git**) récupère la branche `deploy` dans `public_html`, automatiquement si le webhook est configuré.

**Solution de secours sans GitHub :** `npm run build`, puis envoyer le **contenu** de `build/client/` dans `public_html` via le Gestionnaire de fichiers de hPanel (y compris le fichier caché `.htaccess`).

## À savoir

- Le code de ce dossier est la **seule source de vérité**. Ne plus modifier le site dans Horizons : les deux ne se synchronisent pas.
- La boîte `contact@kreativid.com` doit exister dans Hostinger (Emails) pour que le formulaire fonctionne.
- L'export d'origine de Horizons est conservé dans `../horizons-export-*.zip`.
