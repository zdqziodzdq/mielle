import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#2A1D10] text-cream px-5 py-16 md:py-8">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-10">
        {/* Column 1 - Mission */}
        <div>
          <Image
            src="https://getmielle.com/cdn/shop/files/white_logo.png?v=1771853944&width=760"
            alt="Mielle"
            width={200}
            height={60}
            className="h-12 w-auto mb-4"
          />
          <p className="text-sm text-[#C9B8A3]">
            Chez Mielle, on veut que chaque femme se sente belle, douce et
            confiante, jusqu&apos;au bout des pieds. ✨ Parce que prendre soin de
            soi devrait toujours être un moment de plaisir. 💖
          </p>
        </div>

        {/* Column 2 - Links */}
        <div>
          <h3 className="text-sm tracking-widest mb-3.5 text-honey">
            LIENS UTILES
          </h3>
          <ul className="list-none space-y-2">
            <li>
              <Link href="/" className="text-[#C9B8A3] no-underline text-sm hover:text-honey">
                Accueil
              </Link>
            </li>
            <li>
              <Link href="/#fiche-produit" className="text-[#C9B8A3] no-underline text-sm hover:text-honey">
                Kit HoneyGlow
              </Link>
            </li>
            <li>
              <Link href="/produits/honeybalm" className="text-[#C9B8A3] no-underline text-sm hover:text-honey">
                Baume HoneyBalm
              </Link>
            </li>
            <li>
              <Link href="/produits/recharge-60" className="text-[#C9B8A3] no-underline text-sm hover:text-honey">
                Acheter ma recharge
              </Link>
            </li>
            <li>
              <Link href="/suivi" className="text-[#C9B8A3] no-underline text-sm hover:text-honey">
                Suivre ma commande
              </Link>
            </li>
            <li>
              <Link href="/contact" className="text-[#C9B8A3] no-underline text-sm hover:text-honey">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 3 - Legal */}
        <div>
          <h3 className="text-sm tracking-widest mb-3.5 text-honey">
            À PROPOS
          </h3>
          <ul className="list-none space-y-2">
            <li>
              <Link href="/cgv" className="text-[#C9B8A3] no-underline text-sm hover:text-honey">
                Conditions Générales de Vente
              </Link>
            </li>
            <li>
              <Link href="/mentions-legales" className="text-[#C9B8A3] no-underline text-sm hover:text-honey">
                Mentions légales
              </Link>
            </li>
            <li>
              <Link href="/confidentialite" className="text-[#C9B8A3] no-underline text-sm hover:text-honey">
                Politique de confidentialité
              </Link>
            </li>
            <li>
              <Link href="/retours" className="text-[#C9B8A3] no-underline text-sm hover:text-honey">
                Politique de retour et de remboursement
              </Link>
            </li>
            <li>
              <Link href="/renoncer-au-contrat" className="text-[#C9B8A3] no-underline text-sm hover:text-honey">
                Renoncer au contrat
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom */}
      <div className="max-w-6xl mx-auto border-t border-[rgba(255,255,255,0.12)] pt-6 mt-10 text-center">
        <p className="text-xs tracking-wider text-[#8F7C64] mb-1.5">
          MOYENS DE PAIEMENT
        </p>
        <p className="text-xs text-[#C9B8A3] mb-3">
          Amex · Apple Pay · Bancontact · BLIK · CB · EPS · Klarna · Mastercard ·
          MobilePay · PayPal · Shop Pay · Visa
        </p>
        <p className="text-xs text-[#8F7C64]">© 2026, Mielle</p>
      </div>
    </footer>
  );
}
