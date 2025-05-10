import React from "react";
import { Product } from "types/product";
import styles from "./ProductItem.module.css";
import { useCartItems } from "hooks/useCartItems";

interface ProductItemInterface {
  product: Product;
}

export function ProductItem({ product }: ProductItemInterface) {
  const { addCartItem, isProductAddedToCart } = useCartItems();

  return (
    <section className={styles.productItemContainer}>
      <div className={styles.productItemInfoContainer}>
        <h2>Nazwa: {product.name}</h2>
        <p>
          Cena: {product.price.main}.{product.price.fractional}
        </p>
      </div>
      <div className={styles.productItemButtonContainer}>
        {isProductAddedToCart(product.id) ? (
          <p>Produkt dodany</p>
        ) : (
          <button onClick={() => addCartItem(product.id)}>
            Dodaj do koszyka
          </button>
        )}
      </div>
    </section>
  );
}
