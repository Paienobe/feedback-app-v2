import styles from "./ProductRequest.module.css";
import { ProductRequestProps } from "./types";
import commentIcon from "../../../assets/shared/icon-comments.svg";
import upIcon from "../../../assets/shared/icon-arrow-up.svg";
import { useDispatch } from "react-redux";
import { vote } from "../../../store/slices/productRequestsSlice";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ProductRequest = ({ request }: ProductRequestProps) => {
  const { title, description, category, comments, upvotes, id } = request;
  const dispatch = useDispatch();

  const storedVoteStatus = localStorage.getItem(`vote_status_${id}`);
  let defaultVoteStatus = false;

  if (storedVoteStatus) {
    defaultVoteStatus = JSON.parse(storedVoteStatus);
  }

  const [isUpvoted, setIsUpvoted] = useState(defaultVoteStatus);

  const handleVotes = () => {
    dispatch(vote({ id, isUpvote: !isUpvoted }));
    setIsUpvoted(!isUpvoted);
  };

  useEffect(() => {
    localStorage.setItem(`vote_status_${id}`, JSON.stringify(isUpvoted));
  }, [isUpvoted, id]);

  return (
    <section className={styles.product_request}>
      <button
        onClick={handleVotes}
        className={isUpvoted ? styles.upvoted_btn : ""}
      >
        <img src={upIcon} alt="" />
        {upvotes}
      </button>

      <Link to={`/comments/${id}`}>
        <div className={styles.product_request__main}>
          <div className={styles.request_info}>
            <h2>{title}</h2>
            <p>{description}</p>
            <div>{category}</div>
          </div>
        </div>
      </Link>

      <div className={styles.comments_info}>
        <img src={commentIcon} alt="" />
        {comments.length}
      </div>
    </section>
  );
};

export default ProductRequest;
