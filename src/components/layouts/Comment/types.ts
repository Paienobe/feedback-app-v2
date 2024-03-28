import { CommentType } from "../../../types";

export type CommentProp = {
  comment: CommentType;
  isReply: boolean;
  replyingTo?: string;
  parentCommentId?: string | number;
};
