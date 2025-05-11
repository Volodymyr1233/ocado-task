import CartList from "@/components/CartList/CartList";
import React from "react";
import { useNavigate } from "react-router-dom";

export default function CartPage() {
  const navigate = useNavigate();
  return (
    <section>
      <button onClick={() => navigate("/")} className="buttonStyle backBtn">
        Wróć
      </button>
      <CartList />
    </section>
  );
}
