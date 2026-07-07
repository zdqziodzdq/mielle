"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Newsletter from "@/components/Newsletter";

export default function TrackingPage() {
  const [orderNumber, setOrderNumber] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Redirect to ParcelPanel for order tracking
    window.location.href = "https://getmielle.com/apps/parcelpanel";
  };

  return (
    <>
      <Header />
      <main>
        <section className="px-5 py-16 md:py-20 max-w-2xl mx-auto">
          <h1 className="font-display font-bold text-3xl md:text-4xl text-center mb-3">
            Suivre ma commande
          </h1>
          <p className="text-center text-cocoa-soft mb-12">
            Entrez votre numéro de commande et votre adresse e-mail pour suivre
            votre colis en temps réel.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-bold mb-2">
                Numéro de commande *
              </label>
              <input
                type="text"
                value={orderNumber}
                onChange={(e) => setOrderNumber(e.target.value)}
                placeholder="Ex: #123456"
                required
                className="w-full px-4 py-3.5 border-2 border-[#E5D8C6] rounded-3xl font-body text-base focus:outline-none focus:border-honey"
              />
            </div>

            <div>
              <label className="block text-sm font-bold mb-2">E-mail *</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="votre@email.com"
                required
                className="w-full px-4 py-3.5 border-2 border-[#E5D8C6] rounded-3xl font-body text-base focus:outline-none focus:border-honey"
              />
            </div>

            <button type="submit" className="btn btn--cta w-full">
              Suivre ma commande
            </button>
          </form>

          <div className="mt-12 pt-12 border-t border-cream-2">
            <h2 className="font-bold text-xl mb-4">Informations de livraison</h2>
            <ul className="space-y-3 text-cocoa-soft">
              <li>
                <span className="font-bold text-cocoa">Délai de traitement :</span> Expédié
                sous 24-48h
              </li>
              <li>
                <span className="font-bold text-cocoa">Délai de livraison :</span> 5 à 10
                jours ouvrés en France
              </li>
              <li>
                <span className="font-bold text-cocoa">Suivi :</span> Lien de suivi
                fourni par e-mail
              </li>
            </ul>
          </div>
        </section>
      </main>
      <Newsletter />
      <Footer />
    </>
  );
}
