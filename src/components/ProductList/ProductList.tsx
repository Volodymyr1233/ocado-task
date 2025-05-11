import styles from "./ProductList.module.css";
import { ProductItem } from "@/components/ProductItem/ProductItem";
import { useNavigate } from "react-router-dom";
import { useProducts } from "@/hooks/useProducts";
import { useCartItems } from "@/hooks/useCartItems";

export function ProductList() {
  const { products, loading } = useProducts();
  const { calculateCartItems } = useCartItems();
  const navigate = useNavigate();

  return (
    <section className={`listMainContainer`}>
      <h1>Lista produktów</h1>
      {loading && <p>Loading...</p>}
      <section className={`listItemsContainer`}>
        {products &&
          products.map((product, index) => (
            <ProductItem key={index} product={product} />
          ))}
      </section>

      <button
        onClick={() => navigate("/cart")}
        className={`buttonStyle goToNextPageBtn`}
        disabled={calculateCartItems() > 0 ? false : true}
      >
        Przejdź do koszyka
      </button>
    </section>
  );
}
