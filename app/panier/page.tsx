"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Newsletter from "@/components/Newsletter";
import { CartItem, getCart, removeFromCart, updateQuantity, getCartTotal } from "@/lib/cart";

export default function CartPage() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setCart(getCart());
    setIsLoaded(true);

    const handleCartUpdate = () => {
      setCart(getCart());
    };

    window.addEventListener("cartUpdated", handleCartUpdate);
    return () => window.removeEventListener("cartUpdated", handleCartUpdate);
  }, []);

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const giftThreshold = 90;
  const remainingForGift = Math.max(0, giftThreshold - total);
  const progressPercent = Math.min(100, (total / giftThreshold) * 100);

  const handleRemove = (id: string) => {
    removeFromCart(id);
    setCart(getCart());
  };

  const handleQuantityChange = (id: string, quantity: number) => {
    if (quantity > 0) {
      updateQuantity(id, quantity);
      setCart(getCart());
    }
  };

  if (!isLoaded) {
    return (
      <>
        <Header />
        <div className="min-h-[60vh] flex items-center justify-center">
          <p className="text-cocoa-soft">Chargement...</p>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />
      <main>
        <section className="px-5 py-16 md:py-20 max-w-6xl mx-auto">
          <h1 className="font-display font-bold text-3xl md:text-4xl mb-9">Mon panier</h1>

          {cart.length === 0 ? (
            <div className="bg-cream-2 rounded-3xl p-12 text-center">
              <p className="text-xl mb-6 text-cocoa-soft">Votre panier est vide</p>
              <Link href="/produits/honeyglow" className="btn btn--primary">
                Découvrir le Kit HoneyGlow
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Cart items */}
              <div className="lg:col-span-2">
                <div className="space-y-4">
                  {cart.map((item) => (
                    <article
                      key={item.id}
                      className="bg-white rounded-3xl shadow p-4 md:p-6 flex gap-4 items-start"
                    >
                      <div className="w-24 h-24 md:w-32 md:h-32 flex-shrink-0 rounded-2xl overflow-hidden">
                        <Image
                          src={item.image}
                          alt={item.name}
                          width={130}
                          height={130}
                          className="w-full h-full object-cover"
                        />
                      </div>

                      <div className="flex-1">
                        <h3 className="font-bold text-lg mb-2">{item.name}</h3>
                        <p className="text-rose-dark font-bold mb-3">
                          {item.price.toFixed(2)}€
                        </p>

                        <div className="flex items-center gap-3 mb-3">
                          <label className="text-sm font-bold">Quantité:</label>
                          <input
                            type="number"
                            min="1"
                            value={item.quantity}
                            onChange={(e) =>
                              handleQuantityChange(item.id, parseInt(e.target.value))
                            }
                            className="w-16 px-3 py-2 border-2 border-honey rounded-lg text-center"
                          />
                        </div>

                        <button
                          onClick={() => handleRemove(item.id)}
                          className="text-red font-bold text-sm hover:underline"
                        >
                          Supprimer
                        </button>
                      </div>

                      <div className="text-right">
                        <p className="text-sm text-cocoa-soft mb-2">Sous-total</p>
                        <p className="font-bold text-xl">
                          {(item.price * item.quantity).toFixed(2)}€
                        </p>
                      </div>
                    </article>
                  ))}
                </div>
              </div>

              {/* Sidebar */}
              <div>
                <div className="bg-cream-2 rounded-3xl p-6 sticky top-20">
                  {/* Gift progress */}
                  <div className="mb-8">
                    <p className="font-bold mb-3 text-center">
                      🎁 Cadeau Offert dès 90€ d&apos;Achat
                    </p>
                    <div className="w-full bg-white rounded-full h-3 overflow-hidden mb-2">
                      <div
                        className="bg-honey h-full transition-all duration-300"
                        style={{ width: `${progressPercent}%` }}
                      />
                    </div>
                    {remainingForGift > 0 ? (
                      <p className="text-sm text-cocoa-soft text-center">
                        Il vous manque <span className="font-bold">{remainingForGift.toFixed(2)}€</span> pour le cadeau !
                      </p>
                    ) : (
                      <p className="text-sm text-green text-center font-bold">
                        ✓ Vous avez un cadeau offert !
                      </p>
                    )}
                  </div>

                  {/* Summary */}
                  <div className="space-y-3 mb-6">
                    <div className="flex justify-between text-sm">
                      <span>Sous-total :</span>
                      <span className="font-bold">{total.toFixed(2)}€</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Livraison :</span>
                      <span className="font-bold text-green">Gratuite</span>
                    </div>
                    <div className="h-px bg-honey my-3" />
                    <div className="flex justify-between text-lg">
                      <span className="font-bold">Total :</span>
                      <span className="font-bold text-rose-dark">{total.toFixed(2)}€</span>
                    </div>
                  </div>

                  {/* Reassurance */}
                  <div className="space-y-2 mb-6 text-xs text-cocoa-soft">
                    <div className="flex items-start gap-2">
                      <span>✓</span>
                      <span>Paiement sécurisé</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span>✓</span>
                      <span>Satisfait ou remboursé 30J</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span>✓</span>
                      <span>Livraison suivie 5-10 jours</span>
                    </div>
                  </div>

                  {/* Checkout button */}
                  <a
                    href="https://getmielle.com/cart"
                    className="btn btn--cta w-full text-center block"
                  >
                    COMMANDER
                  </a>

                  <Link
                    href="/"
                    className="btn btn--primary w-full text-center block mt-3"
                  >
                    Continuer les achats
                  </Link>
                </div>
              </div>
            </div>
          )}
        </section>
      </main>
      <Newsletter />
      <Footer />
    </>
  );
}
