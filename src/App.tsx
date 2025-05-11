import CartPage from "pages/CartPage";
import SummaryPage from "pages/SummaryPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductsPage from "pages/ProductsPage";
import { CartProvider } from "context/cart-context";
import { ProductProvider } from "context/product-context";
import ConfirmationPage from "pages/ConfirmationPage";

export default function App() {
  return (
    <ProductProvider>
      <CartProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<ProductsPage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/summary" element={<SummaryPage />} />
            <Route path="/confirm" element={<ConfirmationPage />} />
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </ProductProvider>
  );
}
