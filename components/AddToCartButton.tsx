"use client";

import { useState } from "react";
import { addToCart, CartItem } from "@/lib/cart";

interface AddToCartButtonProps {
  item: CartItem;
}

export default function AddToCartButton({ item }: AddToCartButtonProps) {
  const [isAdded, setIsAdded] = useState(false);

  const handleAddToCart = () => {
    addToCart(item);
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 1500);
  };

  return (
    <button
      onClick={handleAddToCart}
      className="btn btn--cta mb-4"
    >
      {isAdded ? "✓ Ajouté au panier" : "AJOUTER AU PANIER"}
    </button>
  );
}
