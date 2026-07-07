import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Newsletter from "@/components/Newsletter";

export default function ConfidentialitePage() {
  return (
    <>
      <Header />
      <main>
        <article className="px-5 py-16 md:py-20 max-w-3xl mx-auto">
          <h1 className="font-display font-bold text-3xl md:text-4xl mb-9">
            Politique de Confidentialité
          </h1>

          <div className="bg-cream-2 border-2 border-honey rounded-2xl p-6 mb-9">
            <p className="text-cocoa font-bold">
              [À REMPLACER PAR LA POLITIQUE DE CONFIDENTIALITÉ OFFICIELLE DE
              MIELLE]
            </p>
          </div>

          <section className="space-y-9">
            <div>
              <h2 className="font-display text-2xl font-bold mb-3">
                Collecte de données
              </h2>
              <p className="text-cocoa-soft">
                [Informations sur les données personnelles collectées]
              </p>
            </div>

            <div>
              <h2 className="font-display text-2xl font-bold mb-3">
                Utilisation des données
              </h2>
              <p className="text-cocoa-soft">[Finalités et base juridique]</p>
            </div>

            <div>
              <h2 className="font-display text-2xl font-bold mb-3">
                Cookies
              </h2>
              <p className="text-cocoa-soft">
                [Politique relative aux cookies et traceurs]
              </p>
            </div>

            <div>
              <h2 className="font-display text-2xl font-bold mb-3">
                Droits CNIL
              </h2>
              <p className="text-cocoa-soft">
                [Accès, rectification, suppression, portabilité]
              </p>
            </div>

            <div>
              <h2 className="font-display text-2xl font-bold mb-3">
                Contact
              </h2>
              <p className="text-cocoa-soft">
                Pour exercer vos droits : contact@getmielle.com
              </p>
            </div>
          </section>

          <div className="bg-honey bg-opacity-10 border border-honey rounded-2xl p-6 mt-9">
            <p className="text-sm text-cocoa">
              La politique de confidentialité doit être conforme au RGPD et à la
              loi Informatique et Libertés. Consultez votre DPO ou un conseil
              juridique.
            </p>
          </div>
        </article>
      </main>
      <Newsletter />
      <Footer />
    </>
  );
}
