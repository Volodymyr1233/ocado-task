import { ProductContext } from "context/product-context";
import { useContext } from "react";

export function useProducts() {
  const context = useContext(ProductContext);

  if (context === undefined) {
    throw new Error("useProducts must be used with provider");
  }

  return context;
}
