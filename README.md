# Mielle — HoneyGlow™ (Landing Page)

Recréation complète de **getmielle.com** en HTML / CSS / JS statique.
Aucun build, aucune dépendance : déployable sur Vercel en 1 clic.

## Structure

```
mielle-site/
├── index.html        ← toute la page
├── css/styles.css    ← styles (palette miel/rose, responsive)
├── js/main.js        ← CONFIG + carrousel, galerie, vidéos, formulaires
└── README.md
```

## ⚙️ Configuration rapide (js/main.js → objet CONFIG)

| Clé | À quoi ça sert |
|---|---|
| `addToCartUrl` | Lien du bouton "Ajouter au panier". Mets ton lien checkout Shopify : `https://getmielle.com/cart/VARIANT_ID:1` (VARIANT_ID dans Shopify > Produits > variante). Par défaut : la page produit. |
| `price` / `comparePrice` | Prix affiché / prix barré. **Vérifie que ça correspond bien à ton pricing actuel** (j'ai mis 79,98 € / 159,96 € d'après la promo -50%). |
| `promoCode` | Code promo affiché après l'inscription newsletter (crée le vrai code dans Shopify > Réductions). |
| `formEndpoint` | Endpoint [Formspree](https://formspree.io) pour le formulaire de contact. Vide = ouvre le client mail. |
| `contactEmail` | E-mail de fallback du formulaire. |

## 🚀 Déploiement GitHub → Vercel

1. Crée un repo sur GitHub (ex: `mielle-site`), puis dans ce dossier :
   ```bash
   git init
   git add .
   git commit -m "Site Mielle HoneyGlow"
   git branch -M main
   git remote add origin https://github.com/TON_USER/mielle-site.git
   git push -u origin main
   ```
2. Sur [vercel.com](https://vercel.com) → **Add New Project** → importe le repo.
3. Framework Preset : **Other** (site statique). Aucune commande de build. → **Deploy**.
4. (Optionnel) Ajoute ton domaine dans Vercel > Settings > Domains.

## ⚠️ À savoir

- **Images & vidéos** : elles pointent vers ton CDN Shopify (`getmielle.com/cdn/...`). Tant que ta boutique Shopify est en ligne, tout s'affiche. Si tu fermes Shopify un jour, télécharge les assets dans un dossier `/assets` et remplace les URLs.
- **Panier / paiement** : un site statique n'a pas de checkout. Le bouton renvoie vers Shopify (ou un lien checkout direct). Pour un checkout 100% custom, il faudrait brancher Stripe/Mollie côté serveur (Next.js + API) — dis-moi si tu veux cette version.
- Les liens "Connexion", "Suivre ma commande" et les pages légales pointent aussi vers getmielle.com.

## 🧪 Tester en local

Ouvre simplement `index.html` dans ton navigateur, ou :
```bash
npx serve .
```
