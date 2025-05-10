import { useCartItems } from "hooks/useCartItems";
import styles from "./CartList.module.css";
import CartsItem from "components/CartItem/CartItem";

export default function CartList() {
  const { cartItems, calculateTotalPrice } = useCartItems();
  return (
    <section className={styles.cartListMainContainer}>
      <h1>Koszyk</h1>
      <section className={styles.cartItemsContainer}>
        {cartItems &&
          cartItems.map((cartItem, index) => (
            <CartsItem key={index} cartItem={cartItem} />
          ))}
      </section>
      <h2 className={styles.cartItemsTotalPrice}>
        Łączna kwota: {calculateTotalPrice()}
      </h2>
    </section>
  );
}
