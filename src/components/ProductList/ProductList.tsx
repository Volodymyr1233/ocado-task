import React from "react";

import styles from "./ProductList.module.css";
import { useFetchData } from "hooks/useFetchData";
import { ProductItem } from "components/ProductItem/ProductItem";

export function ProductList() {
  const { products, loading } = useFetchData("data/products.json");

  return (
    <section className={styles.mainContainer}>
      <h1 className={styles.mainContainerHeader}>Lista produktów</h1>
      {loading && <p>Loading...</p>}
      <section className={styles.productsContainer}>
        {products &&
          products.map((product, index) => (
            <ProductItem key={index} product={product} />
          ))}
      </section>
    </section>
  );
}
