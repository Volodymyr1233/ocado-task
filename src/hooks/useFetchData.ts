import { useEffect, useState } from "react";
import { Product } from "types/product";

export function useFetchData(url: string) {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(false);

  const getData = async () => {
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
  };

  useEffect(() => {
    getData();
  }, [url]);

  return { products, loading };
}
