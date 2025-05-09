import React from "react";
import CartPage from "pages/CartPage";
import SummaryPage from "pages/SummaryPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductsPage from "pages/ProductsPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ProductsPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/summary" element={<SummaryPage />} />
      </Routes>
    </BrowserRouter>
  );
}
