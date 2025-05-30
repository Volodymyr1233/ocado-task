import { Product } from "@/types/product";
import styles from "./ProductItem.module.css";
import { useCartItems } from "@/hooks/useCartItems";

interface ProductItemInterface {
  product: Product;
}

export function ProductItem({ product }: ProductItemInterface) {
  const { addCartItem, isProductAddedToCart } = useCartItems();

  return (
    <section className={`itemContainer ${styles.productItemContainer}`}>
      <div className={`itemInfoContainer`}>
        <h2>Nazwa: {product.name}</h2>
        <p>
          Cena: {product.price.main}.{product.price.fractional}
        </p>
      </div>
      <div className={styles.productItemButtonContainer}>
        {isProductAddedToCart(product.id) ? (
          <p className={styles.productItemAddedText}>Produkt dodany</p>
        ) : (
          <button
            onClick={() => addCartItem(product.id)}
            className="buttonStyle addToCartBtn"
          >
            Dodaj do koszyka
          </button>
        )}
      </div>
    </section>
  );
}
