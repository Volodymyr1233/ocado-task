import { useEffect, useState } from "react";
import { Product } from "@/types/product";
import { useCallback } from "react";

export function useFetchData(url: string) {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(false);

  const getData = useCallback(async () => {
    try {
      setLoading(true);
      const callPromise = await fetch(url);
      const callObject = await callPromise.json();

      setProducts(callObject);
    } catch (error) {
      console.error("Failed to fetch products: ", error);
    } finally {
      setLoading(false);
    }
  }, [url]);

  useEffect(() => {
    getData();
  }, [getData]);

  return { products, loading };
}
