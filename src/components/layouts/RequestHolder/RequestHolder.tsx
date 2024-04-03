import { RootState } from "../../../store/store";
import ProductRequest from "../ProductRequest/ProductRequest";
import styles from "./RequestHolder.module.css";
import { useSelector } from "react-redux";
import { useCategoryContextProvider } from "../../../context/CategoryContext";
import EmptyRequests from "../EmptyRequests/EmptyRequests";

const RequestHolder = () => {
  const { selectedCategory } = useCategoryContextProvider();
  const productRequests = useSelector(
    (state: RootState) => state.productRequests.value
  );

  const isNotEmpty = productRequests.some((request) => {
    return request.category.toLowerCase() === selectedCategory.toLowerCase();
  });

  return (
    <section className={styles.request_holder}>
      {productRequests.map((request) => {
        if (
          selectedCategory === "All" ||
          request.category.toLowerCase() === selectedCategory.toLowerCase()
        ) {
          return <ProductRequest key={request.id} request={request} />;
        }
      })}

      {selectedCategory !== "All" && !isNotEmpty && <EmptyRequests />}
    </section>
  );
};

export default RequestHolder;
