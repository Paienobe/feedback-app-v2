import { useNavigate, useParams } from "react-router-dom";
import styles from "./Comments.module.css";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import ProductRequest from "../../components/layouts/ProductRequest/ProductRequest";
import CommentsHolder from "../../components/layouts/CommentsHolder/CommentsHolder";
import Button from "../../components/ui/Button/Button";
import CommentInput from "../../components/layouts/CommentInput/CommentInput";
import BackButton from "../../components/layouts/BackButton/BackButton";

const CommentsPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const productRequests = useSelector(
    (state: RootState) => state.productRequests.value
  );

  const currentRequest = productRequests.find((request) => {
    return request.id == id;
  });

  if (!currentRequest) {
    return;
  }

  return (
    <section className={styles.comments_page}>
      <div className={styles.comments_holder_header}>
        <BackButton />

        <Button
          text="Edit Feedback"
          width="8.75rem"
          height="2.75rem"
          backgroundColor="#4661e6"
          onClick={() => navigate(`/edit/${id}`)}
        />
      </div>
      <ProductRequest request={currentRequest} />
      <CommentsHolder comments={currentRequest.comments} />
      <CommentInput />
    </section>
  );
};

export default CommentsPage;
