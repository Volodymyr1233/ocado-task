import { useCartItems } from "@/hooks/useCartItems";
import styles from "./ConfirmationList.module.css";
import { SummaryItem } from "@/components/SummaryItem/SummaryItem";

export default function ConfirmationList() {
  const { cartItems, calculateTotalPrice } = useCartItems();

  return (
    <section className={`listMainContainer`}>
      <h1 className={styles.confirmListSuccessHeading}>
        Zamówienie złożone pomyślnie
      </h1>
      <section className={`listItemsContainer`}>
        {cartItems &&
          cartItems.map((cartItem, index) => (
            <SummaryItem key={index} cartItem={cartItem} />
          ))}
      </section>
      <h2 className={`listTotalPrice`}>
        Łączna kwota: {calculateTotalPrice()}
      </h2>

      <button
        onClick={() => {
          localStorage.setItem("cartItems", JSON.stringify([]));
          window.location.href = "/ocado-task";
        }}
        className="buttonStyle goToNextPageBtn"
      >
        Powrót do produktów
      </button>
    </section>
  );
}
