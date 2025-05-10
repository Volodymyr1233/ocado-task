import { ReactNode, useState, createContext, useEffect } from "react";
import { CartProduct } from "types/cart-product";
import { useCallback } from "react";
import { useProducts } from "hooks/useProducts";

type CartProvidersProps = {
  children: ReactNode;
};

type CartContextType = {
  addCartItem: (id: number) => void;
  removeCartItem: (id: number) => void;
  isProductAddedToCart: (id: number) => boolean;
  increaseCartQuantity: (id: number) => void;
  decreaseCartQuantity: (id: number) => void;
  calculateCartItemPrice: (id: number) => number;
  calculateTotalPrice: () => number;
  cartItems: CartProduct[];
};

export const CartContext = createContext({} as CartContextType);

export function CartProvider({ children }: CartProvidersProps) {
  const [cartItems, setCartItems] = useState<CartProduct[]>(() => {
    const savedItems = localStorage.getItem("cartItems");
    if (savedItems) {
      const initialArray = JSON.parse(savedItems);
      return initialArray;
    }

    return [];
  });

  const { products } = useProducts();

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

  const increaseCartQuantity = useCallback((id: number) => {
    setCartItems((cartItems) =>
      cartItems.map((cartItem) =>
        cartItem.product.id === id
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
      )
    );
  }, []);

  const decreaseCartQuantity = useCallback((id: number) => {
    setCartItems((cartItems) =>
      cartItems.map((cartItem) =>
        cartItem.product.id === id
          ? cartItem.quantity > 1
            ? { ...cartItem, quantity: cartItem.quantity - 1 }
            : cartItem
          : cartItem
      )
    );
  }, []);

  const calculateCartItemPrice = useCallback(
    (id: number) => {
      const getCartItem = cartItems.find(
        (cartItem) => cartItem.product.id === id
      );

      if (getCartItem) {
        const calculateSum =
          (getCartItem?.product.price.main +
            getCartItem?.product.price.fractional / 100) *
          getCartItem.quantity;
        return Math.round(calculateSum * 100) / 100;
      }

      return 0;
    },
    [cartItems]
  );

  const calculateTotalPrice = useCallback(() => {
    const totalPrice = cartItems.reduce(
      (sum, cartItem) => sum + calculateCartItemPrice(cartItem.product.id),
      0
    );

    return Math.round(totalPrice * 100) / 100;
  }, [cartItems]);

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  return (
    <CartContext.Provider
      value={{
        addCartItem,
        removeCartItem,
        isProductAddedToCart,
        increaseCartQuantity,
        decreaseCartQuantity,
        calculateCartItemPrice,
        calculateTotalPrice,
        cartItems,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
