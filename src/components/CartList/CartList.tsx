import { useCartItems } from "hooks/useCartItems";
import styles from "./CartList.module.css";
import CartsItem from "components/CartItem/CartItem";
import { useNavigate } from "react-router-dom";

export default function CartList() {
  const { cartItems, calculateTotalPrice } = useCartItems();
  const navigate = useNavigate();

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
      <button onClick={() => navigate("/summary")}>
        Przejdz do podsumowania
      </button>
    </section>
  );
}
