import { CartContext } from "@/context/cart-context";
import { useContext } from "react";

export function useCartItems() {
  const context = useContext(CartContext);

  if (context === undefined) {
    throw new Error("useCartItems must be used with provider");
  }

  return context;
}
