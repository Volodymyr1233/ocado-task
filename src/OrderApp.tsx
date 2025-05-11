import { CartProvider } from "./context/cart-context";
import { ProductProvider } from "./context/product-context";
import ConfirmationPage from "./pages/ConfirmationPage";
export default function OrderApp() {
  return (
    <ProductProvider>
      <CartProvider>
        <ConfirmationPage />
      </CartProvider>
    </ProductProvider>
  );
}
