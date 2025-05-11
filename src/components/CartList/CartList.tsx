import { useCartItems } from "@/hooks/useCartItems";
import styles from "./CartList.module.css";
import CartsItem from "../../components/CartItem/CartItem";
import { useNavigate } from "react-router-dom";

export default function CartList() {
  const { cartItems, calculateTotalPrice } = useCartItems();
  const navigate = useNavigate();

  return (
    <section className={`listMainContainer`}>
      <h1>Koszyk</h1>
      <section className={`listItemsContainer`}>
        {cartItems &&
          cartItems.map((cartItem, index) => (
            <CartsItem key={index} cartItem={cartItem} />
          ))}
      </section>
      <h2 className={`listTotalPrice`}>
        Łączna kwota: {calculateTotalPrice()}
      </h2>
      <button
        className={styles.cartListSummaryBtn}
        onClick={() => navigate("/summary")}
      >
        Przejdz do podsumowania
      </button>
    </section>
  );
}
