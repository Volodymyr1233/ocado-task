import styles from "./SummaryItem.module.css";
import { useCartItems } from "hooks/useCartItems";
import { CartProduct } from "types/cart-product";

interface SummaryItemInterface {
  cartItem: CartProduct;
}

export function SummaryItem({ cartItem }: SummaryItemInterface) {
  const { calculateCartItemPrice } = useCartItems();

  return (
    <section className={styles.summaryItemContainer}>
      <div className={styles.summaryItemInfoContainer}>
        <h2>Nazwa: {cartItem.product.name}</h2>
        <p>
          Cena: {cartItem.product.price.main}.
          {cartItem.product.price.fractional}
        </p>
        <p>Liczba: {cartItem.quantity}</p>
      </div>
      <h3>Kwota: {calculateCartItemPrice(cartItem.product.id)}</h3>
    </section>
  );
}
