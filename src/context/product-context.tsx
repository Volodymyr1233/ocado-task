import { Product } from "@/types/product";
import { createContext, ReactNode } from "react";
import { useFetchData } from "@/hooks/useFetchData";

type ProductContextType = {
  products: Product[];
  loading: boolean;
};

type ProductProviderProps = {
  children: ReactNode;
};

export const ProductContext = createContext({} as ProductContextType);

export function ProductProvider({ children }: ProductProviderProps) {
  const { products, loading } = useFetchData("data/products.json");

  return (
    <ProductContext.Provider value={{ products, loading }}>
      {children}
    </ProductContext.Provider>
  );
}
