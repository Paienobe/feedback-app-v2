import { useParams } from "react-router-dom";
import styles from "./Comments.module.css";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import ProductRequest from "../../components/layouts/ProductRequest/ProductRequest";
import CommentsHolder from "../../components/layouts/CommentsHolder/CommentsHolder";

const CommentsPage = () => {
  const { id } = useParams();
  const productRequests = useSelector(
    (state: RootState) => state.productRequests.value
  );

  const currentRequest = productRequests.find((request) => {
    return request.id === Number(id);
  });

  if (!currentRequest) {
    return;
  }

  return (
    <section className={styles.comments_page}>
      <ProductRequest request={currentRequest} />
      <CommentsHolder comments={currentRequest.comments} />
    </section>
  );
};

export default CommentsPage;
