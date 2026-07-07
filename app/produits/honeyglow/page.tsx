import type { Metadata } from "next";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Newsletter from "@/components/Newsletter";
import AddToCartButton from "@/components/AddToCartButton";

export const metadata: Metadata = {
  title: "✨ HoneyGlow™ – Kit Beauté Pieds | Mielle",
  description:
    "HoneyGlow™ : râpe électrique anti-callosités pour des pieds doux en 2 minutes. 60 disques inclus, -50%. Livraison gratuite.",
};

const PRODUCT = {
  id: "honeyglow",
  name: "✨ HoneyGlow™ – Kit Beauté Pieds",
  price: 79.98,
  image: "https://getmielle.com/cdn/shop/files/FicheProduit10-ezgif.com-png-to-webp-converter.webp?v=1757552117&width=1445",
};

export default function HoneyGlowPage() {
  return (
    <>
      <Header />
      <main>
        <section className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 px-5 py-16 md:py-20 max-w-6xl mx-auto">
          <div>
            <div className="relative rounded-3xl shadow overflow-hidden">
              <Image
                src="https://getmielle.com/cdn/shop/files/FicheProduit10-ezgif.com-png-to-webp-converter.webp?v=1757552117&width=1445"
                alt="✨ HoneyGlow™ – Kit Beauté Pieds"
                width={600}
                height={700}
                priority
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
                <button key={i} className="border-2 border-transparent rounded-2xl overflow-hidden hover:border-honey transition-colors">
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

            <AddToCartButton
              item={{
                id: PRODUCT.id,
                name: PRODUCT.name,
                price: PRODUCT.price,
                quantity: 1,
                image: PRODUCT.image,
              }}
            />

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
      </main>
      <Newsletter />
      <Footer />
    </>
  );
}
