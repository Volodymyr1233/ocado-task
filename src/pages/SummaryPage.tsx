import React from "react";
import SummaryList from "@/components/SummaryList/SummaryList";
import { useNavigate } from "react-router-dom";

export default function SummaryPage() {
  const navigate = useNavigate();
  return (
    <section>
      <button onClick={() => navigate("/cart")} className="buttonStyle backBtn">
        Wróć
      </button>
      <SummaryList />
    </section>
  );
}
