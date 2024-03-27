export interface Request {
  id: number;
  title: string;
  category: string;
  upvotes: number;
  status: string;
  description: string;
  comments: CommentType[];
}

export interface CommentType {
  id: number | string;
  content: string;
  user: User;
  replies?: Reply[];
}

export interface Reply {
  content: string;
  replyingTo: string;
  user: User;
}

export interface User {
  image: string;
  name: string;
  username: string;
}
