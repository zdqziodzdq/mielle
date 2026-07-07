import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Newsletter from "@/components/Newsletter";

export default function CGVPage() {
  return (
    <>
      <Header />
      <main>
        <article className="px-5 py-16 md:py-20 max-w-3xl mx-auto prose prose-lg max-w-none">
          <h1 className="font-display font-bold text-3xl md:text-4xl mb-9">
            Conditions Générales de Vente
          </h1>

          <div className="bg-cream-2 border-2 border-honey rounded-2xl p-6 mb-9">
            <p className="text-cocoa font-bold">
              [À REMPLACER PAR LE TEXTE OFFICIEL DES CONDITIONS GÉNÉRALES DE VENTE
              DE MIELLE]
            </p>
          </div>

          <section className="mb-9">
            <h2 className="font-display text-2xl font-bold mb-4">
              Sections à inclure (modèles) :
            </h2>
            <ul className="space-y-3 list-disc list-inside text-cocoa-soft">
              <li>Définitions et champ d&apos;application</li>
              <li>Produits et tarification</li>
              <li>Commande et confirmation</li>
              <li>Modalités de paiement</li>
              <li>Livraison</li>
              <li>Droit de rétractation</li>
              <li>Garanties et responsabilité</li>
              <li>Protection des données</li>
              <li>Litiges et droit applicable</li>
            </ul>
          </section>

          <div className="bg-honey bg-opacity-10 border border-honey rounded-2xl p-6">
            <p className="text-sm text-cocoa">
              Les CGV officielles de Mielle doivent être collées ici. Consultez
              votre équipe juridique pour la rédaction.
            </p>
          </div>
        </article>
      </main>
      <Newsletter />
      <Footer />
    </>
  );
}
