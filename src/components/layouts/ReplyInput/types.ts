import { CommentType } from "../../../types";

export type ReplyInputProps = {
  comment: CommentType;
  setShowInput: React.Dispatch<React.SetStateAction<boolean>>;
  parentCommentId?: string | number;
};
