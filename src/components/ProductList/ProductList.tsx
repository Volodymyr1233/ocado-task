import styles from "./ProductList.module.css";
import { useFetchData } from "hooks/useFetchData";
import { ProductItem } from "components/ProductItem/ProductItem";
import { useNavigate } from "react-router-dom";

export function ProductList() {
  const { products, loading } = useFetchData("data/products.json");
  const navigate = useNavigate();

  return (
    <section className={styles.productListMainContainer}>
      <h1 className={styles.productListHeaderContainer}>Lista produktów</h1>
      {loading && <p>Loading...</p>}
      <section className={styles.productListContainer}>
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
