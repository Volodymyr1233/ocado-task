import { CartProduct } from "@/types/cart-product";
import styles from "./CartItem.module.css";
import { useCartItems } from "@/hooks/useCartItems";

interface CartItemInterface {
  cartItem: CartProduct;
}

export default function CartItem({ cartItem }: CartItemInterface) {
  const {
    removeCartItem,
    increaseCartQuantity,
    decreaseCartQuantity,
    calculateCartItemPrice,
  } = useCartItems();

  return (
    <section className={`itemContainer ${styles.cartItemContainer}`}>
      <div className={`itemInfoContainer`}>
        <h2>Nazwa: {cartItem.product.name}</h2>
        <p>
          Cena: {cartItem.product.price.main}.
          {cartItem.product.price.fractional}
        </p>
      </div>
      <div className={styles.cartItemCounter}>
        <button
          className={styles.cartItemCounterButton}
          onClick={() => decreaseCartQuantity(cartItem.product.id)}
        >
          -
        </button>
        <p className={styles.cartItemCounterText}>{cartItem.quantity}</p>
        <button
          className={styles.cartItemCounterButton}
          onClick={() => increaseCartQuantity(cartItem.product.id)}
        >
          +
        </button>
      </div>
      <div className={styles.cartItemEndContainer}>
        <button
          onClick={() => removeCartItem(cartItem.product.id)}
          className="buttonStyle removeFromCartBtn"
        >
          Usuń z koszyka
        </button>
        <h3>Kwota: {calculateCartItemPrice(cartItem.product.id)}</h3>
      </div>
    </section>
  );
}
