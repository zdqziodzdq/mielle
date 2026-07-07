"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Newsletter from "@/components/Newsletter";

export default function ContactPage() {
  const [status, setStatus] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.currentTarget;
    const data = new FormData(form);

    // Fallback: open mail client
    const body = encodeURIComponent(
      `Nom : ${data.get("nom")}\nE-mail : ${data.get("email")}\nTéléphone : ${data.get("telephone") || "-"}\n\n${data.get("commentaire")}`
    );
    window.location.href = `mailto:contact@getmielle.com?subject=Contact%20Mielle&body=${body}`;

    setStatus("Votre application e-mail va s'ouvrir…");
    setIsSubmitting(false);
    form.reset();
  };

  return (
    <>
      <Header />
      <main>
        <section className="px-5 py-16 md:py-20 max-w-2xl mx-auto">
          <h1 className="font-display font-bold text-3xl md:text-4xl text-center mb-3">
            Une question ?
          </h1>
          <p className="text-center text-cocoa-soft mb-12">
            Notre service client est disponible du lundi au vendredi. Temps de
            réponse moyen : moins de 24h.
          </p>

          <form onSubmit={handleSubmit} className="space-y-3.5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
              <input
                type="text"
                name="nom"
                placeholder="Nom *"
                required
                className="px-4 py-3.5 border-2 border-[#E5D8C6] rounded-3xl font-body text-base focus:outline-none focus:border-honey"
              />
              <input
                type="email"
                name="email"
                placeholder="E-mail *"
                required
                className="px-4 py-3.5 border-2 border-[#E5D8C6] rounded-3xl font-body text-base focus:outline-none focus:border-honey"
              />
            </div>

            <input
              type="tel"
              name="telephone"
              placeholder="Numéro de téléphone"
              className="w-full px-4 py-3.5 border-2 border-[#E5D8C6] rounded-3xl font-body text-base focus:outline-none focus:border-honey"
            />

            <textarea
              name="commentaire"
              placeholder="Commentaire *"
              required
              rows={6}
              className="w-full px-4 py-3.5 border-2 border-[#E5D8C6] rounded-3xl font-body text-base focus:outline-none focus:border-honey resize-none"
            />

            <button
              type="submit"
              disabled={isSubmitting}
              className="btn btn--cta w-full"
            >
              {isSubmitting ? "Envoi..." : "Envoyer"}
            </button>
          </form>

          {status && (
            <p className="mt-4 text-center font-bold text-green">{status}</p>
          )}
        </section>
      </main>
      <Newsletter />
      <Footer />
    </>
  );
}
