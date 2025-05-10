import { useCartItems } from "hooks/useCartItems";
import styles from "./CartList.module.css";
import CartsItem from "components/CartItem/CartItem";

export default function CartList() {
  const { cartItems } = useCartItems();
  return (
    <section>
      <h1>Koszyk</h1>
      <section className={styles.productsContainer}>
        {cartItems &&
          cartItems.map((cartItem, index) => (
            <CartsItem key={index} cartItem={cartItem} />
          ))}
      </section>
    </section>
  );
}
