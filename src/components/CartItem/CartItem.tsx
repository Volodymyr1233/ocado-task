import { CartItem } from "types/cart-product";
import styles from "./CartItem.module.css";
import { useCartItems } from "hooks/useCartItems";

interface CartItemInterface {
  cartItem: CartItem;
}

export default function CartsItem({ cartItem }: CartItemInterface) {
  const { removeCartItem } = useCartItems();

  return (
    <section className={styles.itemContainer}>
      <div className={styles.productInfoContainer}>
        <h2>Nazwa: {cartItem.product.name}</h2>
        <p>
          Cena: {cartItem.product.price.main}.
          {cartItem.product.price.fractional}
        </p>
        <p>Liczba: {cartItem.quantity}</p>
      </div>
      <div className={styles.buttonContainer}>
        <button onClick={() => removeCartItem(cartItem.product.id)}>
          Usuń z koszyka
        </button>
      </div>
    </section>
  );
}
