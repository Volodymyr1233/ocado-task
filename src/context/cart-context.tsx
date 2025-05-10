import { ReactNode, useState, createContext } from "react";
import { CartItem } from "types/cart-product";
import { useCallback } from "react";
import { useFetchData } from "hooks/useFetchData";

type CartProvidersProps = {
  children: ReactNode;
};

type CartContextType = {
  // getItemsQuantity: (id: number) => number;
  // increaseCartQuantity: (id: number) => void;
  // decreaseCartQuantity: (id: number) => void;
  // calculateTotalPrice: () => number;
  addCartItem: (id: number) => void;
  removeCartItem: (id: number) => void;
  isProductAddedToCart: (id: number) => boolean;
  cartItems: CartItem[];
};

export const CartContext = createContext({} as CartContextType);

export function CartProvider({ children }: CartProvidersProps) {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const { products } = useFetchData("data/products.json");

  const addCartItem = useCallback(
    (id: number) => {
      const getProduct = products.find((product) => product.id === id);
      if (getProduct) {
        setCartItems([...cartItems, { product: getProduct, quantity: 1 }]);
      }
    },
    [products, cartItems]
  );

  const isProductAddedToCart = useCallback(
    (id: number) => {
      const result = cartItems.filter((cartItem) => cartItem.product.id === id);
      if (result.length > 0) {
        return true;
      }
      return false;
    },
    [cartItems]
  );

  const removeCartItem = useCallback(
    (id: number) => {
      setCartItems(cartItems.filter((cartItem) => cartItem.product.id !== id));
    },
    [cartItems]
  );

  return (
    <CartContext.Provider
      value={{ addCartItem, removeCartItem, isProductAddedToCart, cartItems }}
    >
      {children}
    </CartContext.Provider>
  );
}
