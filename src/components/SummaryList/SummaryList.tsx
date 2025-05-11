import { useCartItems } from "@/hooks/useCartItems";
import { SummaryItem } from "@/components/SummaryItem/SummaryItem";

export default function SummaryList() {
  const { cartItems, calculateTotalPrice } = useCartItems();

  return (
    <section className={`listMainContainer`}>
      <h1>Podsumowanie</h1>
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
        onClick={() => (window.location.href = "/ocado-task/order.html")}
        className="buttonStyle goToNextPageBtn"
      >
        Złóż zamówienie
      </button>
    </section>
  );
}
