import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Newsletter from "@/components/Newsletter";

export default function ReturnsPage() {
  return (
    <>
      <Header />
      <main>
        <article className="px-5 py-16 md:py-20 max-w-3xl mx-auto">
          <h1 className="font-display font-bold text-3xl md:text-4xl mb-9">
            Politique de Retour et de Remboursement
          </h1>

          <div className="bg-honey bg-opacity-20 border-2 border-honey rounded-2xl p-6 mb-9">
            <p className="font-bold text-cocoa mb-3">Résumé rapide :</p>
            <ul className="space-y-2 text-cocoa-soft">
              <li>✓ 30 jours satisfait ou remboursé</li>
              <li>✓ Retour gratuit en France</li>
              <li>✓ Remboursement sous 14 jours</li>
            </ul>
          </div>

          <section className="space-y-9">
            <div>
              <h2 className="font-display text-2xl font-bold mb-3">
                Droit de rétractation
              </h2>
              <p className="text-cocoa-soft mb-4">
                Vous disposez d&apos;un délai de 30 jours à compter de la
                réception de votre commande pour exercer votre droit de
                rétractation, sans justification ni pénalité.
              </p>
              <p className="text-cocoa-soft">
                [À REMPLACER PAR LES MODALITÉS OFFICIELLES]
              </p>
            </div>

            <div>
              <h2 className="font-display text-2xl font-bold mb-3">
                Procédure de retour
              </h2>
              <ol className="list-decimal list-inside space-y-2 text-cocoa-soft">
                <li>Contactez notre service client : contact@getmielle.com</li>
                <li>Recevez une étiquette de retour</li>
                <li>Renvoyez le produit dans son emballage d&apos;origine</li>
                <li>Recevez votre remboursement sous 14 jours</li>
              </ol>
            </div>

            <div>
              <h2 className="font-display text-2xl font-bold mb-3">
                Frais de livraison
              </h2>
              <p className="text-cocoa-soft">
                Les frais de livraison sont gratuits pour tous les retours en
                France.
              </p>
            </div>

            <div>
              <h2 className="font-display text-2xl font-bold mb-3">
                Remboursement
              </h2>
              <p className="text-cocoa-soft mb-4">
                Vous serez remboursé du prix de votre produit dans les 14 jours
                suivant la réception et l&apos;inspection de votre retour.
              </p>
              <p className="text-cocoa-soft">
                [À REMPLACER PAR LES CONDITIONS COMPLÈTES]
              </p>
            </div>

            <div>
              <h2 className="font-display text-2xl font-bold mb-3">
                Exceptions
              </h2>
              <p className="text-cocoa-soft">
                Certains produits ne peuvent pas être retournés s&apos;ils ont
                été utilisés au-delà d&apos;un test de conformité. Consultez
                les conditions détaillées pour chaque produit.
              </p>
            </div>
          </section>

          <div className="bg-cream-2 rounded-2xl p-6 mt-9">
            <p className="font-bold text-cocoa mb-3">Des questions ?</p>
            <p className="text-cocoa-soft">
              Contactez notre service client à contact@getmielle.com ou consultez
              nos CGV pour plus de détails.
            </p>
          </div>
        </article>
      </main>
      <Newsletter />
      <Footer />
    </>
  );
}
