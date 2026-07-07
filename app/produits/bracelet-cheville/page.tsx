import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Newsletter from "@/components/Newsletter";
import AddToCartButton from "@/components/AddToCartButton";

export const metadata: Metadata = {
  title: "Bracelet Chaîne de Cheville – Acier Inoxydable | Mielle",
  description:
    "Bracelet de cheville en acier inoxydable. Résistant à l'eau, hypoallergénique. 16,95€.",
};

export default function BraceletPage() {
  return (
    <>
      <Header />
      <main>
        <section className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 px-5 py-16 md:py-20 max-w-6xl mx-auto">
          <div>
            <div className="rounded-3xl shadow overflow-hidden">
              <Image
                src="https://getmielle.com/cdn/shop/files/1-ezgif.com-png-to-webp-converter_7_4a95caff-c752-4465-b3e8-116c28d1970d.webp?v=1775642834&width=1000"
                alt="Bracelet Chaîne de Cheville"
                width={600}
                height={700}
                priority
                className="w-full"
              />
            </div>
          </div>

          <div>
            <h1 className="font-display font-bold text-3xl md:text-4xl leading-tight mb-3">
              Bracelet Chaîne de Cheville
            </h1>

            <div className="flex items-baseline gap-3 mb-6">
              <span className="text-3xl font-bold text-rose-dark">16,95€</span>
            </div>

            <ul className="list-none mb-6">
              <li className="py-0.75">✔ Acier inoxydable — ne noircit pas</li>
              <li className="py-0.75">✔ Hypoallergénique &amp; résistant à l&apos;eau</li>
              <li className="py-0.75">✔ Taille ajustable</li>
            </ul>

            <p className="mb-6 text-cocoa-soft leading-relaxed">
              Sublimez vos pieds tout doux avec ce bracelet de cheville en acier inoxydable. Résistant à l&apos;eau, hypoallergénique, il ne noircit pas et ne s&apos;oxyde pas. Le complément parfait de votre routine HoneyGlow pour des pieds irrésistibles en sandales.
            </p>

            <AddToCartButton
              item={{
                id: "bracelet-cheville",
                name: "Bracelet Chaîne de Cheville",
                price: 16.95,
                quantity: 1,
                image: "https://getmielle.com/cdn/shop/files/1-ezgif.com-png-to-webp-converter_7_4a95caff-c752-4465-b3e8-116c28d1970d.webp?v=1775642834&width=1000",
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
              <p className="font-bold mb-4">Complétez votre look :</p>
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
