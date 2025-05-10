import { useContext, ReactNode} from "react";
import { CartItem } from "types/cart-product";
import { createContext } from "vm";

type CartProvidersProps = {
  children: ReactNode;
};

type CartContextType = {
  getItemsQuantity: (id: number) => number;
  increaseCartQuantity: (id: number) => void;
  decreaseCartQuantity: (id: number) => void;
  removeFromCart: (id: number) => void;
  calculateTotalPrice: () => number;
  cartItems: CartItem[];
};


export const CartContext = createContext({} as CartContextType)

export function CartProvider({children}: CartProvidersProps) {
    
}
