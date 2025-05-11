import styles from "./ProductList.module.css";
import { ProductItem } from "@/components/ProductItem/ProductItem";
import { useNavigate } from "react-router-dom";
import { useProducts } from "@/hooks/useProducts";

export function ProductList() {
  const { products, loading } = useProducts();
  const navigate = useNavigate();

  return (
    <section className={`listMainContainer`}>
      <h1 className={styles.productListHeaderContainer}>Lista produktów</h1>
      {loading && <p>Loading...</p>}
      <section className={`listItemsContainer`}>
        {products &&
          products.map((product, index) => (
            <ProductItem key={index} product={product} />
          ))}
      </section>

      <button
        onClick={() => navigate("/cart")}
        className={styles.productListGoToCartBtn}
      >
        Przejdź do koszyka
      </button>
    </section>
  );
}
