import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Newsletter from "@/components/Newsletter";

export default function ContractWithdrawalPage() {
  return (
    <>
      <Header />
      <main>
        <article className="px-5 py-16 md:py-20 max-w-3xl mx-auto">
          <h1 className="font-display font-bold text-3xl md:text-4xl mb-9">
            Renoncer au Contrat
          </h1>

          <div className="bg-cream-2 border-2 border-honey rounded-2xl p-6 mb-9">
            <p className="text-cocoa font-bold">
              [À REMPLACER PAR LE FORMULAIRE OFFICIEL DE RÉTRACTATION CONFORME À
              L&apos;ARTICLE L.221-18 DU CODE DE LA CONSOMMATION]
            </p>
          </div>

          <section className="space-y-9">
            <div>
              <h2 className="font-display text-2xl font-bold mb-3">
                Votre droit de rétractation
              </h2>
              <p className="text-cocoa-soft mb-4">
                Conformément à la directive 2011/83/UE et au code de la
                consommation français, vous avez le droit de renoncer à votre
                contrat dans les 14 jours suivant la conclusion du contrat, sauf
                exceptions légales.
              </p>
              <p className="text-cocoa-soft">
                [À REMPLACER PAR LE CONTENU LÉGAL DÉTAILLÉ]
              </p>
            </div>

            <div>
              <h2 className="font-display text-2xl font-bold mb-3">
                Conditions d&apos;application
              </h2>
              <ul className="list-disc list-inside space-y-2 text-cocoa-soft">
                <li>Délai légal : 14 jours à compter de la réception</li>
                <li>Le produit doit être en état de revente</li>
                <li>Aucun frais de rétractation en cas de défaut</li>
                <li>Les frais de renvoi restent à votre charge</li>
              </ul>
            </div>

            <div>
              <h2 className="font-display text-2xl font-bold mb-3">
                Comment faire ?
              </h2>
              <p className="text-cocoa-soft mb-4">
                Envoyez un e-mail à contact@getmielle.com en indiquant :
              </p>
              <ul className="list-disc list-inside space-y-2 text-cocoa-soft">
                <li>Votre numéro de commande</li>
                <li>La date de réception du produit</li>
                <li>La raison du retour</li>
                <li>Votre numéro de client</li>
              </ul>
            </div>

            <div>
              <h2 className="font-display text-2xl font-bold mb-3">
                Exceptions
              </h2>
              <p className="text-cocoa-soft">
                Le droit de rétractation ne s&apos;applique pas aux produits
                personnalisés ou ayant perdu leur conditionnement d&apos;origine
                après utilisation importante.
              </p>
            </div>

            <div>
              <h2 className="font-display text-2xl font-bold mb-3">
                Formulaire type
              </h2>
              <div className="bg-cream-2 rounded-2xl p-6 font-mono text-sm text-cocoa-soft">
                <p className="mb-3">
                  À adresser à : contact@getmielle.com
                </p>
                <p className="mb-3">
                  Je renonce par la présente au contrat relatif à la vente du
                  bien/service ci-dessous :
                </p>
                <p>
                  - Commandé le : [DATE]
                  <br />
                  - Numéro de commande : [NUMÉRO]
                  <br />
                  - Nom : [NOM]
                  <br />
                  - E-mail : [EMAIL]
                  <br />
                  - Date de ce formulaire : [DATE]
                </p>
              </div>
            </div>
          </section>

          <div className="bg-honey bg-opacity-10 border border-honey rounded-2xl p-6 mt-9">
            <p className="text-sm text-cocoa">
              Ce formulaire doit être conforme à la Directive 2011/83/UE et au
              code de la consommation français. Consultez votre équipe juridique
              pour vous assurer de la conformité complète.
            </p>
          </div>
        </article>
      </main>
      <Newsletter />
      <Footer />
    </>
  );
}
