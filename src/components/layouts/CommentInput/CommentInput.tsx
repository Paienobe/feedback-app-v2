import { useState } from "react";
import Textarea from "../../ui/Textarea/Textarea";
import Button from "../../ui/Button/Button";
import styles from "./CommentInput.module.css";
import { useDispatch } from "react-redux";
import { comment } from "../../../store/slices/productRequestsSlice";
import { useParams } from "react-router-dom";
import { v4 as uuid } from "uuid";
import { useSelector } from "react-redux";
import { RootState } from "../../../store/store";

const CommentInput = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const user = useSelector((state: RootState) => state.user.value);
  const maxCharacterLength = 225;

  const [commentContent, setCommentContent] = useState("");
  const [characterLength, setCharacterLength] = useState(maxCharacterLength);

  const handleCommentInput = (text: string) => {
    const validText = text.substring(0, maxCharacterLength);

    setCommentContent(validText);
    const availableCharacters = maxCharacterLength - validText.length;

    if (availableCharacters > 0) {
      setCharacterLength(availableCharacters);
    } else setCharacterLength(0);
  };

  const handleCreateComment = () => {
    const newComment = {
      id: uuid(),
      content: commentContent,
      user: user,
      replies: [],
    };

    if (commentContent) {
      dispatch(comment({ requestId: id, comment: newComment }));
      setCommentContent("");
      setCharacterLength(maxCharacterLength);
    }
  };

  return (
    <form
      className={styles.comment_input}
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <h2>Add Comment</h2>
      <Textarea
        cols={10}
        rows={3.5}
        width="100%"
        max={maxCharacterLength}
        text={commentContent}
        onChangeFunc={handleCommentInput}
      />
      <p>{characterLength} characters left</p>
      <Button
        width="8.75rem"
        height="2.75rem"
        backgroundColor="#ad1fea"
        text="Post Comment"
        onClick={handleCreateComment}
      />
    </form>
  );
};

export default CommentInput;
