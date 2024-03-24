import styles from "./CommentsHolder.module.css";
import { CommentsHolderProps } from "./types";

const CommentsHolder = ({ comments }: CommentsHolderProps) => {
  return (
    <section className={styles.comments_holder}>
      <h2>{comments.length} comments</h2>
    </section>
  );
};

export default CommentsHolder;
