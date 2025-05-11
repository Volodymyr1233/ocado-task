import React from "react";
import ReactDOM from "react-dom/client";
import OrderApp from "./OrderApp";
import "./index.css";

const root = ReactDOM.createRoot(
  document.getElementById("order-root") as HTMLElement
);
root.render(<OrderApp />);
