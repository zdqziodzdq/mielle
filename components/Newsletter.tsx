"use client";

import { useState } from "react";
import Image from "next/image";

export default function Newsletter() {
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubscribed(true);
  };

  return (
    <section className="bg-cocoa text-cream px-5 py-16 md:py-20">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-[1.2fr_0.8fr] gap-10 items-center">
        <div>
          <h2 className="font-display font-600 text-2xl md:text-4xl mb-3">
            Abonnez-vous et profitez d&apos;une réduction de 10% sur votre
            première commande
          </h2>
          <p className="text-[#D9C9B5] mb-5">
            Inscrivez-vous à notre newsletter pour profiter de réductions
            spéciales et d&apos;offres exclusives.
          </p>

          {!isSubscribed ? (
            <form onSubmit={handleSubscribe} className="flex gap-2.5 flex-wrap">
              <input
                type="email"
                placeholder="Votre email"
                className="flex-1 min-w-[220px] px-4 py-3.5 rounded-full border-none text-base font-body"
                required
              />
              <button type="submit" className="btn btn--primary">
                S&apos;abonner
              </button>
            </form>
          ) : (
            <div className="bg-[rgba(242,169,59,0.1)] border border-honey rounded-2xl p-6">
              <p className="text-honey font-bold mb-2">Code promo valide !</p>
              <p className="text-cream mb-3">
                Utilisez le code <span className="font-bold">MIELLE10</span> pour{" "}
                10% de réduction
              </p>
              <button
                onClick={() => navigator.clipboard.writeText("MIELLE10")}
                className="btn btn--primary text-sm"
              >
                Copier le code
              </button>
            </div>
          )}
        </div>

        <div className="order-first md:order-last">
          <Image
            src="https://getmielle.com/cdn/shop/files/honeyglowvideopresentation-ezgif.com-video-to-webp-converter.webp?v=1767574058&width=1500"
            alt="Newsletter"
            width={500}
            height={600}
            className="rounded-3xl"
          />
        </div>
      </div>
    </section>
  );
}
