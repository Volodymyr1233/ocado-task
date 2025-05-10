import React from "react";
import { Product } from "types/product";
import styles from "./ProductItem.module.css";

interface ProductItemInterface {
  product: Product;
}

export function ProductItem({ product }: ProductItemInterface) {
  return (
    <section className={styles.itemContainer}>
      <div className={styles.productInfoContainer}>
        <h2>Nazwa: {product.name}</h2>
        <p>
          Cena: {product.price.main}.{product.price.fractional}
        </p>
      </div>
      <div className={styles.buttonContainer}>
        <button>Dodaj do koszyka</button>
      </div>
    </section>
  );
}
