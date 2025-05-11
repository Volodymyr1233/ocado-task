import React from "react";
import SummaryList from "@/components/SummaryList/SummaryList";
import { useNavigate } from "react-router-dom";

export default function SummaryPage() {
  const navigate = useNavigate();
  return (
    <section>
      <button onClick={() => navigate("/cart")} className="backButton">
        Wróć
      </button>
      <SummaryList />
    </section>
  );
}
