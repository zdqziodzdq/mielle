import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Newsletter from "@/components/Newsletter";

export const metadata: Metadata = {
  title: "Mielle – Pieds Doux en 2 Minutes | Râpe Électrique HoneyGlow™",
  description:
    "Découvrez le kit HoneyGlow™ : pieds doux, lisses et sublimes en 2 minutes. Livraison gratuite, 30J satisfait ou remboursé.",
};

export default function Home() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="hero">
          <Link href="/#fiche-produit">
            <Image
              src="https://getmielle.com/cdn/shop/files/ete1-ezgif.com-png-to-webp-converter.webp?v=1780932484&width=3840"
              alt="Promo de l'été Mielle"
              width={1920}
              height={600}
              priority
              className="hidden md:block w-full"
            />
            <Image
              src="https://getmielle.com/cdn/shop/files/Mobile3-ezgif.com-png-to-webp-converter.webp?v=1757004671&width=800"
              alt="Promo de l'été Mielle"
              width={800}
              height={600}
              priority
              className="md:hidden w-full"
            />
          </Link>
        </section>

        {/* Marquee logos */}
        <div className="marquee marquee--logos" aria-hidden="true">
          <div className="marquee__track marquee__track--logos">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="flex gap-16 items-center whitespace-nowrap">
                <Image
                  src="https://getmielle.com/cdn/shop/files/13.png?v=1755560539"
                  alt=""
                  width={80}
                  height={42}
                  loading="lazy"
                />
                <Image
                  src="https://getmielle.com/cdn/shop/files/14.png?v=1755560560"
                  alt=""
                  width={80}
                  height={42}
                  loading="lazy"
                />
                <Image
                  src="https://getmielle.com/cdn/shop/files/mag_1.png?v=1755560580"
                  alt=""
                  width={80}
                  height={42}
                  loading="lazy"
                />
                <Image
                  src="https://getmielle.com/cdn/shop/files/mag_2.png?v=1755560594"
                  alt=""
                  width={80}
                  height={42}
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Benefits */}
        <section className="px-5 py-16 md:py-24 max-w-6xl mx-auto text-center">
          <h2 className="section-title">
            Adopté par les femmes irrésistibles
            <br />
            de la tête aux pieds
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center mt-9">
            <ul className="list-none text-left flex flex-col gap-9">
              <li className="font-display text-lg md:text-xl font-600 bg-white px-5 py-4.5 rounded-3xl shadow">
                Compact, léger &amp; ergonomique
              </li>
              <li className="font-display text-lg md:text-xl font-600 bg-white px-5 py-4.5 rounded-3xl shadow">
                Élimine efficacement corne &amp; crevasses
              </li>
              <li className="font-display text-lg md:text-xl font-600 bg-white px-5 py-4.5 rounded-3xl shadow">
                Réduit naturellement &amp; durablement les odeurs
              </li>
            </ul>
            <div className="hidden md:block">
              <Image
                src="https://getmielle.com/cdn/shop/files/honeyglowvideopresentation-ezgif.com-video-to-webp-converter.webp?v=1767574058&width=1500"
                alt="HoneyGlow en action"
                width={420}
                height={500}
                loading="lazy"
                className="rounded-3xl shadow mx-auto"
              />
            </div>
            <ul className="list-none text-left flex flex-col gap-9">
              <li className="font-display text-lg md:text-xl font-600 bg-white px-5 py-4.5 rounded-3xl shadow">
                Améliore l&apos;hygiène des pieds
              </li>
              <li className="font-display text-lg md:text-xl font-600 bg-white px-5 py-4.5 rounded-3xl shadow">
                Pieds doux &amp; lisses en 2 minutes
              </li>
              <li className="font-display text-lg md:text-xl font-600 bg-white px-5 py-4.5 rounded-3xl shadow">
                Économisez +600€/an en soins de pédicure
              </li>
            </ul>
          </div>
          <Link href="/#fiche-produit" className="btn btn--primary mt-9 inline-block">
            JE VEUX DES PIEDS TOUT DOUX ✨
          </Link>
        </section>

        {/* Reviews Carousel */}
        <section className="bg-cream-2 px-5 py-16 md:py-24">
          <div className="max-w-6xl mx-auto">
            <h2 className="section-title">
              Confiance retrouvée dès la 1ʳᵉ utilisation
              <br />
              pour des milliers de femmes
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-9 overflow-x-auto">
              {[
                {
                  img: "https://getmielle.com/cdn/shop/files/avant_apres_1.webp?v=1754301484&width=900",
                  name: "Cécile L.",
                  quote:
                    "En un seul passage, j'ai retrouvé la douceur de mes pieds. Avant, je filais mes collants à chaque fois… maintenant, c'est fini !",
                },
                {
                  img: "https://getmielle.com/cdn/shop/files/FicheProduit9-ezgif.com-png-to-webp-converter.webp?v=1756750159&width=900",
                  name: "Justine M.",
                  quote:
                    "Mes crevasses étaient douloureuses et s'aggravaient de jour en jour. Grâce à HoneyGlow et au stick HoneyBalm, j'ai pu réparer et hydrater mes talons en profondeur.",
                },
                {
                  img: "https://getmielle.com/cdn/shop/files/44-ezgif.com-png-to-webp-converter_1.webp?v=1756749921&width=900",
                  name: "Diana T.",
                  quote:
                    "Toute cette corne incrustée était un vrai complexe pour moi, et en plus elle favorisait les mauvaises odeurs. Grâce à HoneyGlow, mon hygiène s'est considérablement améliorée.",
                },
                {
                  img: "https://getmielle.com/cdn/shop/files/avant_apres_2.webp?v=1754301483&width=900",
                  name: "Cécile L.",
                  quote:
                    "Mes talons étaient très secs, ça tirait et devenait douloureux. En un seul passage, j'ai pu m'en débarrasser. Incroyable !",
                },
                {
                  img: "https://getmielle.com/cdn/shop/files/45-ezgif.com-png-to-webp-converter_1.webp?v=1756749920&width=900",
                  name: "Catherine L.",
                  quote:
                    "Je souffrais tellement à cause des fissures dans mes talons. En à peine 2-3 séances avec la râpe HoneyGlow, j'ai retrouvé des talons tout doux… comme à mes 20 ans.",
                },
                {
                  img: "https://getmielle.com/cdn/shop/files/46-ezgif.com-png-to-webp-converter.webp?v=1756749920&width=900",
                  name: "Béatrice C.",
                  quote:
                    "J'avais négligé mes pieds pendant des années. Grâce à cette râpe magique, j'ai enfin pu en prendre soin à la maison, sans me ruiner en pédicures ou chez le podologue. Je recommande vivement !",
                },
                {
                  img: "https://getmielle.com/cdn/shop/files/avant_apres_3.webp?v=1754301483&width=900",
                  name: "Clara V.",
                  quote:
                    "Les talons secs, c'était un vrai calvaire pour moi, surtout à l'approche de l'hiver. Mais maintenant, je n'ai plus aucun souci : je sais que j'aurai des pieds tout doux grâce à la râpe HoneyGlow et au baume hydratant au miel.",
                },
              ].map((review, i) => (
                <article
                  key={i}
                  className="bg-white rounded-3xl shadow overflow-hidden flex-shrink-0 w-full md:w-auto"
                >
                  <Image
                    src={review.img}
                    alt="Avant/après HoneyGlow"
                    width={300}
                    height={300}
                    loading="lazy"
                    className="aspect-square object-cover w-full"
                  />
                  <div className="p-4.5">
                    <span className="font-bold block">{review.name}</span>
                    <span className="text-honey-dark block tracking-wider mb-2">
                      ★★★★★
                    </span>
                    <p className="text-sm text-cocoa-soft">
                      <em>{review.quote}</em>
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* UGC Videos */}
        <section className="px-5 py-16 md:py-24 max-w-6xl mx-auto">
          <h2 className="section-title">
            Nos clientes ont retrouvé la douceur de leurs pieds
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-6 gap-3.5 mt-8">
            {[
              "https://getmielle.com/cdn/shop/videos/c/vp/1a60f74020ca4937a32d699e5c326ec7/1a60f74020ca4937a32d699e5c326ec7.m3u8?v=0",
              "https://getmielle.com/cdn/shop/videos/c/vp/4c85be2477df479b8f04f1d183864e5d/4c85be2477df479b8f04f1d183864e5d.m3u8?v=0",
              "https://getmielle.com/cdn/shop/videos/c/vp/8396a99bd1054de49289e99a33e038df/8396a99bd1054de49289e99a33e038df.m3u8?v=0",
              "https://getmielle.com/cdn/shop/videos/c/vp/29bc96257d0f4cfc96bd69eb58f48f82/29bc96257d0f4cfc96bd69eb58f48f82.m3u8?v=0",
              "https://getmielle.com/cdn/shop/videos/c/vp/776d1b7e1fa3478f9a68c9d25b15b9aa/776d1b7e1fa3478f9a68c9d25b15b9aa.m3u8?v=0",
              "https://getmielle.com/cdn/shop/videos/c/vp/30c3c2dd156343f4918f13597c6a54a8/30c3c2dd156343f4918f13597c6a54a8.m3u8?v=0",
            ].map((src, i) => (
              <video
                key={i}
                src={src}
                muted
                loop
                playsInline
                autoPlay
                className="aspect-[9/16] object-cover rounded-3xl bg-cream-2"
              />
            ))}
          </div>
        </section>

        {/* Product Section - HoneyGlow */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 px-5 py-16 md:py-20 max-w-6xl mx-auto" id="fiche-produit">
          <div>
            <div className="relative rounded-3xl shadow overflow-hidden">
              <Image
                src="https://getmielle.com/cdn/shop/files/FicheProduit10-ezgif.com-png-to-webp-converter.webp?v=1757552117&width=1445"
                alt="✨ HoneyGlow™ – Kit Beauté Pieds"
                width={600}
                height={700}
                loading="lazy"
                className="w-full"
              />
              <span className="absolute top-3.5 left-3.5 bg-rose text-white font-bold px-3.5 py-1.5 rounded-full text-sm">
                -50%
              </span>
            </div>
            <div className="grid grid-cols-5 gap-2 mt-3">
              {[
                "https://getmielle.com/cdn/shop/files/FicheProduit10-ezgif.com-png-to-webp-converter.webp?v=1757552117&width=416",
                "https://getmielle.com/cdn/shop/files/0110-ezgif.com-video-to-webp-converter.webp?v=1768066923&width=416",
                "https://getmielle.com/cdn/shop/files/prod2.webp?v=1768066923&width=416",
                "https://getmielle.com/cdn/shop/files/prod3.webp?v=1768066923&width=416",
                "https://getmielle.com/cdn/shop/files/prod4.webp?v=1768066923&width=416",
              ].map((src, i) => (
                <button
                  key={i}
                  className="border-2 border-transparent rounded-2xl overflow-hidden hover:border-honey transition-colors"
                >
                  <Image
                    src={src}
                    alt={`Visuel ${i + 1}`}
                    width={100}
                    height={100}
                    loading="lazy"
                    className="aspect-square object-cover w-full"
                  />
                </button>
              ))}
            </div>
          </div>

          <div>
            <div className="flex items-center gap-2 mb-3.5">
              <span className="font-bold">Excellent</span>
              <Image
                src="https://cdn.shopify.com/s/files/1/0969/6696/7621/files/stars-5-1.svg?v=1755121539"
                alt="5 étoiles"
                width={100}
                height={20}
                loading="lazy"
              />
              <span className="text-sm">1232 avis sur</span>
              <Image
                src="https://cdn.shopify.com/s/files/1/0969/6696/7621/files/Trustpilot_logo.png?v=1755121540"
                alt="Trustpilot"
                width={80}
                height={20}
                loading="lazy"
              />
            </div>

            <h1 className="font-display font-bold text-3xl md:text-4xl leading-tight mb-3">
              ✨ HoneyGlow™ – Kit Beauté Pieds
            </h1>

            <div className="flex items-baseline gap-3 mb-2">
              <span className="text-3xl font-bold text-rose-dark">79,98€</span>
              <span className="text-xl text-cocoa-soft line-through">159,96€</span>
            </div>

            <p className="text-red font-bold mb-3.5">🔥 Plus que 4 en stock</p>

            <ul className="list-none mb-3.5">
              <li className="py-0.75">✔ Sublime l&apos;apparence &amp; l&apos;hygiène</li>
              <li className="py-0.75">✔ Adoucit et lisse les talons abîmés</li>
              <li className="py-0.75">✔ Pour retrouver des pieds doux en 2 minutes</li>
            </ul>

            <p className="mb-4.5">
              🛡️ 30J satisfait ou remboursé — <strong>Stock limité !</strong>
            </p>

            <Link href="/produits/honeyglow" className="btn btn--cta mb-4">
              AJOUTER AU PANIER
            </Link>

            <div className="flex gap-2 mb-4 flex-wrap">
              <Image
                src="https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.fr/assets/amex.CzM8tWdZ.svg"
                alt="American Express"
                width={40}
                height={26}
                loading="lazy"
              />
              <Image
                src="https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.fr/assets/mastercard.1c4_lyMp.svg"
                alt="Mastercard"
                width={40}
                height={26}
                loading="lazy"
              />
              <Image
                src="https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.fr/assets/visa.sxIq5Dot.svg"
                alt="Visa"
                width={40}
                height={26}
                loading="lazy"
              />
              <Image
                src="https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.fr/assets/paypal.DKGbBcpo.svg"
                alt="PayPal"
                width={40}
                height={26}
                loading="lazy"
              />
            </div>

            <p className="mb-3.5 font-bold">+300 achetés au cours des dernières 24h</p>

            <div className="flex gap-4.5 flex-wrap text-sm font-medium mb-6">
              <span className="flex items-center gap-1.5">
                <Image
                  src="https://getmielle.com/cdn/shop/files/trust_1.png?v=1754433003"
                  alt=""
                  width={26}
                  height={26}
                  loading="lazy"
                />
                Livraison offerte
              </span>
              <span className="flex items-center gap-1.5">
                <Image
                  src="https://getmielle.com/cdn/shop/files/trust_3.png?v=1754433004"
                  alt=""
                  width={26}
                  height={26}
                  loading="lazy"
                />
                Paiement sécurisé
              </span>
              <span className="flex items-center gap-1.5">
                <Image
                  src="https://getmielle.com/cdn/shop/files/trust_2.png?v=1754433003"
                  alt=""
                  width={26}
                  height={26}
                  loading="lazy"
                />
                Satisfait ou remboursé
              </span>
            </div>

            {/* Accordions */}
            <div className="space-y-2.5">
              <details className="bg-white rounded-2xl shadow overflow-hidden">
                <summary className="cursor-pointer p-4 font-bold list-none relative">
                  ✅ Authenticité &amp; Sécurité
                  <span className="absolute right-5 top-1/2 -translate-y-1/2">+</span>
                </summary>
                <div className="px-5 pb-4.5 text-cocoa-soft text-sm">
                  <p>
                    HoneyGlow™ est certifié CE, testé sur tous types de peaux.
                    Aucun produit chimique : seulement une abrasion douce
                    contrôlée.
                  </p>
                </div>
              </details>

              <details className="bg-white rounded-2xl shadow overflow-hidden">
                <summary className="cursor-pointer p-4 font-bold list-none relative">
                  ✅ Bénéfices Clés
                  <span className="absolute right-5 top-1/2 -translate-y-1/2">+</span>
                </summary>
                <div className="px-5 pb-4.5 text-cocoa-soft text-sm">
                  <p>
                    • Pieds ultra-doux dès la 1ʳᵉ utilisation.
                    <br />
                    • 0 douleur, 0 effort : 2 min par pied.
                    <br />
                    • Économique : remplace les séances pédicure en institut.
                    <br />
                    • Résultats visibles &amp; durables (moins de corne à
                    chaque session).
                    <br />• Boost de confiance : sandales et talons assumés
                    toute l&apos;année.
                  </p>
                </div>
              </details>

              <details className="bg-white rounded-2xl shadow overflow-hidden">
                <summary className="cursor-pointer p-4 font-bold list-none relative">
                  ✅ Comment l&apos;utiliser ?
                  <span className="absolute right-5 top-1/2 -translate-y-1/2">+</span>
                </summary>
                <div className="px-5 pb-4.5 text-cocoa-soft text-sm">
                  <p>
                    1. Branche l&apos;appareil.
                    <br />
                    2. Choisis le disque (Doux ou Rugueux).
                    <br />
                    3. Passe délicatement 2 min max par pied.
                    <br />
                    4. Enjoy ✨
                  </p>
                </div>
              </details>

              <details className="bg-white rounded-2xl shadow overflow-hidden">
                <summary className="cursor-pointer p-4 font-bold list-none relative">
                  ✅ Livraison
                  <span className="absolute right-5 top-1/2 -translate-y-1/2">+</span>
                </summary>
                <div className="px-5 pb-4.5 text-cocoa-soft text-sm">
                  <p>
                    <em>
                      En raison d&apos;une forte demande nos délais de livraison
                      sont compris entre 5 et 10 jours ouvrés.
                    </em>
                  </p>
                  <p className="mt-2">
                    Chaque commande est soigneusement préparée dans notre
                    entrepôt, et un <strong>lien de suivi</strong> vous sera
                    envoyé dès l&apos;expédition.
                  </p>
                </div>
              </details>
            </div>
          </div>
        </section>

        {/* 3 Steps */}
        <section className="bg-cream-2 px-5 py-16 md:py-24">
          <div className="max-w-6xl mx-auto">
            <h2 className="section-title">Des pieds sublimes en 3 étapes</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-9">
              {[
                {
                  title: "Étape 1 — Préparez",
                  desc: "Préparez le HoneyGlow en collant le disque de votre choix (doux ou rugueux), branchez l'appareil et choisissez le niveau d'intensité.",
                  video:
                    "https://cdn.shopify.com/videos/c/o/v/165e36503a40438abca00dd2b4639d7d.mp4",
                },
                {
                  title: "Étape 2 — Poncez",
                  desc: "Passez le HoneyGlow sur les zones abîmées (cornes, callosités, peaux mortes) pour retrouver une peau de bébé.",
                  video:
                    "https://cdn.shopify.com/videos/c/o/v/f93385780cca4aa69eb92e9828ae2838.mp4",
                },
                {
                  title: "Étape 3 — Brillez ✨",
                  desc: "En quelques minutes vos pieds sont lisses, doux et brillants 🤩 Vous êtes prêtes pour enfiler votre paire de talon préférée !",
                  video:
                    "https://cdn.shopify.com/videos/c/o/v/bbe66c9e658e46cca6f1eede105cf77d.mp4",
                },
              ].map((step, i) => (
                <article key={i} className="bg-white rounded-3xl shadow overflow-hidden">
                  <video
                    src={step.video}
                    muted
                    loop
                    playsInline
                    autoPlay
                    className="aspect-[4/5] object-cover w-full"
                  />
                  <div className="p-4">
                    <h3 className="font-display text-lg mb-2">{step.title}</h3>
                    <p className="text-sm text-cocoa-soft">{step.desc}</p>
                  </div>
                </article>
              ))}
            </div>
            <Link href="/#fiche-produit" className="btn btn--primary mt-9 inline-block">
              COMMANDER MON HONEYGLOW
            </Link>
          </div>
        </section>

        {/* Testimonials */}
        <section className="px-5 py-16 md:py-24 max-w-6xl mx-auto">
          <h2 className="section-title">99% de clientes satisfaites, elles témoignent :</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-9">
            {[
              {
                img: "https://getmielle.com/cdn/shop/files/1_-_1767635706967-ezgif.com-png-to-webp-converter.webp?v=1767655181&width=800",
                title: "Pieds doux en 2 minutes chrono",
                quote:
                  "J'ai essayé plein de produits pour mes talons secs... mais rien ne fonctionnait vraiment. Avec HoneyGlow, j'ai retrouvé la douceur de mes pieds.",
              },
              {
                img: "https://getmielle.com/cdn/shop/files/3_-_1767635706953-ezgif.com-png-to-webp-converter.webp?v=1767655181&width=800",
                title: "Fini les odeurs de pieds",
                quote:
                  "J'avais une hygiène des pieds qui me complexait. Depuis que j'utilise HoneyGlow, plus aucun problème d'odeur. C'est vraiment magique !",
              },
              {
                img: "https://getmielle.com/cdn/shop/files/2_-_1767635706959-ezgif.com-png-to-webp-converter.webp?v=1767655181&width=800",
                title: "Je peux enfin porter des sandales",
                quote:
                  "Avant HoneyGlow, j'avais honte de mes pieds abîmés. Maintenant, j'adore porter des sandales et marcher pieds nus à la plage !",
              },
            ].map((testimonial, i) => (
              <article
                key={i}
                className="bg-white rounded-3xl shadow overflow-hidden flex flex-col"
              >
                <Image
                  src={testimonial.img}
                  alt=""
                  width={300}
                  height={300}
                  loading="lazy"
                  className="aspect-square object-cover"
                />
                <div className="p-4.5 flex flex-col flex-1">
                  <h3 className="font-display text-lg mb-1">{testimonial.title}</h3>
                  <p className="text-sm text-cocoa-soft flex-1">
                    {testimonial.quote}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Upsell */}
        <section className="bg-cream-2 px-5 py-16 md:py-24">
          <div className="max-w-6xl mx-auto">
            <h2 className="section-title">Complétez votre routine Mielle</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-9">
              {[
                {
                  name: "🍯 HoneyBalm™",
                  price: "19,99€",
                  img: "https://getmielle.com/cdn/shop/files/1-ezgif.com-png-to-webp-converter_3.webp?v=1755530014&width=1000",
                  href: "/produits/honeybalm",
                },
                {
                  name: "💅 HoneyGlow Recharges",
                  price: "22,21€",
                  img: "https://getmielle.com/cdn/shop/files/recharges_0a9e43e0-a791-43f6-8eec-a3ee4e21fa07.png?v=1754299921&width=1000",
                  href: "/produits/recharge-60",
                },
                {
                  name: "✨ Bracelet Chaîne",
                  price: "16,95€",
                  img: "https://getmielle.com/cdn/shop/files/1-ezgif.com-png-to-webp-converter_7_4a95caff-c752-4465-b3e8-116c28d1970d.webp?v=1775642834&width=1000",
                  href: "/produits/bracelet-cheville",
                },
              ].map((product, i) => (
                <Link
                  key={i}
                  href={product.href}
                  className="bg-white rounded-3xl shadow overflow-hidden text-decoration-none transition-transform hover:-translate-y-1 flex flex-col"
                >
                  <Image
                    src={product.img}
                    alt={product.name}
                    width={300}
                    height={300}
                    loading="lazy"
                    className="aspect-square object-cover"
                  />
                  <div className="p-3.5 flex flex-col flex-1">
                    <h3 className="text-base font-600 mb-1 flex-1">
                      {product.name}
                    </h3>
                    <p className="text-rose-dark font-bold">{product.price}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter */}
        <Newsletter />
      </main>
      <Footer />
    </>
  );
}
