import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Newsletter from "@/components/Newsletter";
import AddToCartButton from "@/components/AddToCartButton";

export const metadata: Metadata = {
  title: "💅 HoneyGlow Recharges – 60 Disques | Mielle",
  description:
    "Recharges HoneyGlow : 60 disques pour votre râpe électrique. 3 grains au choix. 22,21€.",
};

export default function RechargePage() {
  return (
    <>
      <Header />
      <main>
        <section className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 px-5 py-16 md:py-20 max-w-6xl mx-auto">
          <div>
            <div className="rounded-3xl shadow overflow-hidden">
              <Image
                src="https://getmielle.com/cdn/shop/files/recharges_0a9e43e0-a791-43f6-8eec-a3ee4e21fa07.png?v=1754299921&width=1000"
                alt="💅 HoneyGlow Recharges – 60 Disques"
                width={600}
                height={700}
                priority
                className="w-full"
              />
            </div>
          </div>

          <div>
            <h1 className="font-display font-bold text-3xl md:text-4xl leading-tight mb-3">
              💅 HoneyGlow Recharges – 60 Disques
            </h1>

            <div className="flex items-baseline gap-3 mb-6">
              <span className="text-3xl font-bold text-rose-dark">22,21€</span>
            </div>

            <ul className="list-none mb-6">
              <li className="py-0.75">✔ 60 disques = plusieurs mois d&apos;utilisation</li>
              <li className="py-0.75">✔ Compatible avec tous les HoneyGlow™</li>
              <li className="py-0.75">✔ 3 grains au choix : Doux / Moyen / Rugueux</li>
            </ul>

            <p className="mb-6 text-cocoa-soft leading-relaxed">
              60 disques de recharge pour votre râpe électrique HoneyGlow™. Disponibles en 3 grains : Doux (grain fin) pour les retouches hebdo &amp; la finition, Moyen pour l&apos;entretien régulier, Rugueux (grain grossier) pour les callosités épaisses et talons très fissurés. Collez un disque neuf sur la tête de l&apos;appareil et c&apos;est reparti.
            </p>

            <AddToCartButton
              item={{
                id: "recharge-60",
                name: "💅 HoneyGlow Recharges – 60 Disques",
                price: 22.21,
                quantity: 1,
                image: "https://getmielle.com/cdn/shop/files/recharges_0a9e43e0-a791-43f6-8eec-a3ee4e21fa07.png?v=1754299921&width=1000",
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
              <p className="font-bold mb-4">Vous aimerez aussi :</p>
              <div className="grid grid-cols-2 gap-4">
                <Link
                  href="/produits/honeyglow"
                  className="bg-cream-2 p-3 rounded-2xl text-center no-underline hover:bg-honey hover:bg-opacity-20 transition-colors"
                >
                  <p className="font-bold text-sm mb-1">Kit HoneyGlow</p>
                  <p className="text-xs font-bold text-rose-dark">79,98€</p>
                </Link>
                <Link
                  href="/produits/honeybalm"
                  className="bg-cream-2 p-3 rounded-2xl text-center no-underline hover:bg-honey hover:bg-opacity-20 transition-colors"
                >
                  <p className="font-bold text-sm mb-1">Baume HoneyBalm</p>
                  <p className="text-xs font-bold text-rose-dark">19,99€</p>
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
