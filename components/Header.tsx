"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    const updateCartCount = () => {
      const cart = JSON.parse(localStorage.getItem("mielle-cart") || "[]");
      const count = cart.reduce(
        (sum: number, item: any) => sum + (item.quantity || 0),
        0
      );
      setCartCount(count);
    };

    updateCartCount();
    window.addEventListener("storage", updateCartCount);
    window.addEventListener("cartUpdated", updateCartCount);

    return () => {
      window.removeEventListener("storage", updateCartCount);
      window.removeEventListener("cartUpdated", updateCartCount);
    };
  }, []);

  return (
    <>
      {/* Announce bar */}
      <div className="announce">
        <span className="announce__badge">%</span>
        <strong>PROMO DE L&apos;ÉTÉ ☀️ JUSQU&apos;À -50%</strong>
      </div>

      {/* Marquee */}
      <div className="marquee" aria-hidden="true">
        <div className="marquee__track">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="flex gap-12 whitespace-nowrap">
              <span>Satisfait ou remboursé</span>
              <span>Livraison offerte</span>
              <span>🎁 Cadeau Offert dès 90€ d&apos;Achat</span>
              <span>N°1 en France 🇫🇷</span>
            </div>
          ))}
        </div>
      </div>

      {/* Header */}
      <header className="sticky top-0 z-50 bg-cream flex items-center justify-between px-5 py-2.5 border-b border-cream-2">
        <button
          className="md:hidden w-6 h-6 flex flex-col gap-1 bg-none border-none cursor-pointer"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Ouvrir le menu"
        >
          <span className="w-6 h-0.5 bg-cocoa rounded"></span>
          <span className="w-6 h-0.5 bg-cocoa rounded"></span>
          <span className="w-6 h-0.5 bg-cocoa rounded"></span>
        </button>

        <Link href="/" className="flex items-center">
          <Image
            src="https://getmielle.com/cdn/shop/files/logo_1.png?v=1754303122&width=500"
            alt="Mielle"
            width={130}
            height={44}
            priority
          />
        </Link>

        <nav
          className={`${
            isMenuOpen ? "translate-x-0" : "-translate-x-full"
          } fixed md:static inset-0 md:inset-auto top-0 md:top-auto bg-cream md:bg-transparent flex flex-col md:flex-row gap-2 md:gap-6 px-8 md:px-0 py-24 md:py-0 transition-transform duration-250 md:transition-none z-40 md:z-auto`}
        >
          <Link
            href="/"
            className="no-underline font-medium text-sm md:text-base pb-3 md:pb-0 border-b md:border-b-2 md:border-transparent border-cream-2 transition-colors hover:border-honey"
            onClick={() => setIsMenuOpen(false)}
          >
            Accueil
          </Link>
          <Link
            href="/#fiche-produit"
            className="no-underline font-medium text-sm md:text-base pb-3 md:pb-0 border-b md:border-b-2 md:border-transparent border-cream-2 transition-colors hover:border-honey"
            onClick={() => setIsMenuOpen(false)}
          >
            Kit HoneyGlow
          </Link>
          <Link
            href="/produits/honeybalm"
            className="no-underline font-medium text-sm md:text-base pb-3 md:pb-0 border-b md:border-b-2 md:border-transparent border-cream-2 transition-colors hover:border-honey"
            onClick={() => setIsMenuOpen(false)}
          >
            Baume HoneyBalm
          </Link>
          <Link
            href="/produits/recharge-60"
            className="no-underline font-medium text-sm md:text-base pb-3 md:pb-0 border-b md:border-b-2 md:border-transparent border-cream-2 transition-colors hover:border-honey"
            onClick={() => setIsMenuOpen(false)}
          >
            Acheter ma recharge
          </Link>
          <Link
            href="/suivi"
            className="no-underline font-medium text-sm md:text-base pb-3 md:pb-0 border-b md:border-b-2 md:border-transparent border-cream-2 transition-colors hover:border-honey"
            onClick={() => setIsMenuOpen(false)}
          >
            Suivre ma commande
          </Link>
          <Link
            href="/contact"
            className="no-underline font-medium text-sm md:text-base pb-3 md:pb-0 border-b md:border-b-2 md:border-transparent border-cream-2 transition-colors hover:border-honey"
            onClick={() => setIsMenuOpen(false)}
          >
            Contact
          </Link>
        </nav>

        <div className="flex gap-3.5">
          <a
            href="https://getmielle.com/customer_authentication/redirect?locale=fr&region_country=FR"
            className="w-6 h-6"
            aria-label="Connexion"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
              <circle cx="12" cy="8" r="4" />
              <path d="M4 21c0-4 3.6-6.5 8-6.5s8 2.5 8 6.5" />
            </svg>
          </a>
          <Link href="/panier" className="w-6 h-6 relative" aria-label="Panier">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
              <path d="M6 7h12l-1.2 12.2a2 2 0 0 1-2 1.8H9.2a2 2 0 0 1-2-1.8L6 7z" />
              <path d="M9 7V6a3 3 0 0 1 6 0v1" />
            </svg>
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-rose text-white text-xs w-5 h-5 rounded-full flex items-center justify-center font-bold">
                {cartCount}
              </span>
            )}
          </Link>
        </div>
      </header>
    </>
  );
}
