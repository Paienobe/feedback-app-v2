import Comment from "../Comment/Comment";
import styles from "./CommentsHolder.module.css";
import { CommentsHolderProps } from "./types";

const CommentsHolder = ({ comments }: CommentsHolderProps) => {
  return (
    <section className={styles.comments_holder}>
      <h2>{comments.length} comments</h2>

      {comments.map((comment) => {
        return <Comment key={comment.id} comment={comment} isReply={false} />;
      })}
    </section>
  );
};

export default CommentsHolder;
