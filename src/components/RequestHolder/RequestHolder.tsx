import { RootState } from "../../store/store";
import ProductRequest from "../ProductRequest/ProductRequest";
import styles from "./RequestHolder.module.css";
import { useSelector } from "react-redux";

const RequestHolder = () => {
  const productRequests = useSelector(
    (state: RootState) => state.productRequests.value
  );
  return (
    <section className={styles.request_holder}>
      {productRequests.map((request) => {
        return <ProductRequest key={request.id} />;
      })}
    </section>
  );
};

export default RequestHolder;
