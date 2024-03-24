import { RootState } from "../../../store/store";
import ProductRequest from "../ProductRequest/ProductRequest";
import styles from "./RequestHolder.module.css";
import { useSelector } from "react-redux";
import emptyIllustration from "../../../assets/suggestions/illustration-empty.svg";
import Button from "../../ui/Button/Button";

const RequestHolder = () => {
  const productRequests = useSelector(
    (state: RootState) => state.productRequests.value
  );
  return (
    <section className={styles.request_holder}>
      {productRequests.length > 0 ? (
        <>
          {productRequests.map((request) => {
            return <ProductRequest key={request.id} request={request} />;
          })}
        </>
      ) : (
        <section className={styles.empty_holder}>
          <img src={emptyIllustration} alt="" />
          <h1>There is no feedback yet.</h1>
          <p>
            Got a suggestion? Found a bug that needs to be squashed? <br /> We
            love hearing about new ideas to improve our app.
          </p>
          <Button
            text="+ Add Feedback"
            width="9.75rem"
            height="2.75rem"
            backgroundColor="var(--purple)"
            onClick={() => {}}
          />
        </section>
      )}
    </section>
  );
};

export default RequestHolder;
