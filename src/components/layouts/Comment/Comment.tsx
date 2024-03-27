import { useState } from "react";
import { userImages } from "../../../utils/images";
import ReplyInput from "../ReplyInput/ReplyInput";
import styles from "./Comment.module.css";
import { CommentProp } from "./types";
import { CommentType } from "../../../types";
import { v4 as uuid } from "uuid";

const Comment = ({ comment, isReply, replyingTo }: CommentProp) => {
  const { user, content, replies } = comment;

  const [showInput, setShowInput] = useState(false);

  return (
    <section className={`${styles.comment} ${isReply ? styles.is_reply : ""}`}>
      <div className={styles.maker_holder}>
        <div className={styles.comment_maker}>
          <img src={userImages[user.image]} alt="user_image" />
          <div>
            <p>{user.name}</p>
            <p>@{user.username}</p>
          </div>
        </div>

        <button onClick={() => setShowInput(true)}>Reply</button>

        {!isReply && replies?.length ? (
          <div className={styles.line}></div>
        ) : null}
      </div>

      <p className={styles.comment_content}>
        {isReply && <span>@{replyingTo} </span>}
        {content}
      </p>
      {showInput && <ReplyInput />}

      <div className={styles.reply_holder}>
        {replies?.map((reply) => {
          return (
            <Comment
              key={uuid()}
              comment={reply as unknown as CommentType}
              isReply={true}
              replyingTo={reply.replyingTo}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Comment;
