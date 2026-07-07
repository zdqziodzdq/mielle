import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Newsletter from "@/components/Newsletter";

export default function MentionsLegalesPage() {
  return (
    <>
      <Header />
      <main>
        <article className="px-5 py-16 md:py-20 max-w-3xl mx-auto">
          <h1 className="font-display font-bold text-3xl md:text-4xl mb-9">
            Mentions Légales
          </h1>

          <div className="bg-cream-2 border-2 border-honey rounded-2xl p-6 mb-9">
            <p className="text-cocoa font-bold">
              [À REMPLACER PAR LES MENTIONS LÉGALES OFFICIELLES DE MIELLE]
            </p>
          </div>

          <section className="space-y-9">
            <div>
              <h2 className="font-display text-2xl font-bold mb-3">
                Informations de l&apos;éditeur
              </h2>
              <p className="text-cocoa-soft">
                [Raison sociale, adresse, numéro SIRET, responsable publication]
              </p>
            </div>

            <div>
              <h2 className="font-display text-2xl font-bold mb-3">
                Hébergement
              </h2>
              <p className="text-cocoa-soft">[Informations de l&apos;hébergeur]</p>
            </div>

            <div>
              <h2 className="font-display text-2xl font-bold mb-3">
                Propriété intellectuelle
              </h2>
              <p className="text-cocoa-soft">
                [Droits d&apos;auteur et conditions d&apos;utilisation]
              </p>
            </div>

            <div>
              <h2 className="font-display text-2xl font-bold mb-3">
                Responsabilité
              </h2>
              <p className="text-cocoa-soft">
                [Clause de responsabilité du site]
              </p>
            </div>
          </section>

          <div className="bg-honey bg-opacity-10 border border-honey rounded-2xl p-6 mt-9">
            <p className="text-sm text-cocoa">
              Consultez votre équipe juridique pour la rédaction complète des
              mentions légales conformément à la CNIL et au droit français.
            </p>
          </div>
        </article>
      </main>
      <Newsletter />
      <Footer />
    </>
  );
}
