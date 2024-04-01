import { useParams } from "react-router-dom";
import Button from "../../ui/Button/Button";
import Textarea from "../../ui/Textarea/Textarea";
import styles from "./ReplyInput.module.css";
import { useDispatch, useSelector } from "react-redux";
import { reply } from "../../../store/slices/productRequestsSlice";
import { ReplyInputProps } from "./types";
import { useState } from "react";
import { RootState } from "../../../store/store";
import { useIsMobile } from "../../../hooks/useIsMobile";

const ReplyInput = ({
  comment,
  setShowInput,
  parentCommentId,
}: ReplyInputProps) => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const user = useSelector((state: RootState) => state.user.value);

  const [replyContent, setReplyContent] = useState("");

  const handleReplyInput = (text: string) => {
    setReplyContent(text);
  };

  const handleCreateReply = () => {
    const newReply = {
      content: replyContent,
      replyingTo: comment.user.username,
      user,
    };
    if (replyContent) {
      dispatch(
        reply({
          requestId: id,
          commentId: parentCommentId ?? comment.id,
          reply: newReply,
        })
      );
    }
  };

  const isMobile = useIsMobile();

  return (
    <form
      className={styles.reply_input}
      onSubmit={(e) => {
        e.preventDefault();
        setShowInput(false);
      }}
    >
      <Textarea
        cols={10}
        rows={3.5}
        width="100%"
        text={replyContent}
        onChangeFunc={handleReplyInput}
      />
      <Button
        text="Post Reply"
        width={!isMobile ? "7.25rem" : "100%"}
        height="2.75rem"
        backgroundColor="#ad1fea"
        onClick={handleCreateReply}
      />
    </form>
  );
};

export default ReplyInput;
