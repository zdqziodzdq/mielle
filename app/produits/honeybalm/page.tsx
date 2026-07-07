import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Newsletter from "@/components/Newsletter";
import AddToCartButton from "@/components/AddToCartButton";

export const metadata: Metadata = {
  title: "🍯 HoneyBalm™ – Baume Hydratant | Mielle",
  description:
    "HoneyBalm™ : baume hydratant au miel pour les pieds. Répare les talons secs et crevasses. 19,99€.",
};

export default function HoneyBalmPage() {
  return (
    <>
      <Header />
      <main>
        <section className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 px-5 py-16 md:py-20 max-w-6xl mx-auto">
          <div>
            <div className="rounded-3xl shadow overflow-hidden">
              <Image
                src="https://getmielle.com/cdn/shop/files/1-ezgif.com-png-to-webp-converter_3.webp?v=1755530014&width=1000"
                alt="🍯 HoneyBalm™ – Baume Hydratant"
                width={600}
                height={700}
                priority
                className="w-full"
              />
            </div>
          </div>

          <div>
            <h1 className="font-display font-bold text-3xl md:text-4xl leading-tight mb-3">
              🍯 HoneyBalm™ – Baume Hydratant au Miel
            </h1>

            <div className="flex items-baseline gap-3 mb-6">
              <span className="text-3xl font-bold text-rose-dark">19,99€</span>
            </div>

            <ul className="list-none mb-6">
              <li className="py-0.75">✔ Hydrate et nourrit en profondeur</li>
              <li className="py-0.75">✔ Répare talons secs et crevasses</li>
              <li className="py-0.75">✔ Au miel — texture non grasse, absorption rapide</li>
              <li className="py-0.75">✔ Convient aussi pour les mains</li>
            </ul>

            <p className="mb-6 text-cocoa-soft leading-relaxed">
              Après avoir nettoyé la peau, appliquez une petite quantité sur vos pieds, en insistant sur les zones les plus abîmées. Massez délicatement jusqu&apos;à absorption complète pour retrouver une peau douce et nourrie. Idéal pour un usage quotidien !
            </p>

            <div className="bg-cream-2 p-4 rounded-2xl mb-6">
              <p className="text-sm font-bold mb-2">💡 Astuce :</p>
              <p className="text-sm">
                Associez l&apos;utilisation du HoneyBalm à la râpe électrique HoneyGlow pour des résultats optimaux.
              </p>
            </div>

            <AddToCartButton
              item={{
                id: "honeybalm",
                name: "🍯 HoneyBalm™ – Baume Hydratant au Miel",
                price: 19.99,
                quantity: 1,
                image: "https://getmielle.com/cdn/shop/files/1-ezgif.com-png-to-webp-converter_3.webp?v=1755530014&width=1000",
              }}
            />

            <div className="flex gap-4.5 flex-wrap text-sm font-medium mb-8">
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

            {/* Cross-sell */}
            <div className="mt-8 pt-8 border-t border-cream-2">
              <p className="font-bold mb-4">Complétez votre routine :</p>
              <div className="grid grid-cols-2 gap-4">
                <Link
                  href="/produits/honeyglow"
                  className="bg-cream-2 p-3 rounded-2xl text-center no-underline hover:bg-honey hover:bg-opacity-20 transition-colors"
                >
                  <p className="font-bold text-sm mb-1">Kit HoneyGlow</p>
                  <p className="text-xs font-bold text-rose-dark">79,98€</p>
                </Link>
                <Link
                  href="/produits/recharge-60"
                  className="bg-cream-2 p-3 rounded-2xl text-center no-underline hover:bg-honey hover:bg-opacity-20 transition-colors"
                >
                  <p className="font-bold text-sm mb-1">Recharges (60)</p>
                  <p className="text-xs font-bold text-rose-dark">22,21€</p>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Newsletter />
      <Footer />
    </>
  );
}
