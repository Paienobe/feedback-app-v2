import { v4 as uuid } from "uuid";
import { Request } from "../../types";

type Data = {
  title: string;
  category: string;
  detail: string;
};

export const createProductRequest = (data: Data) => {
  const request: Request = {
    id: uuid(),
    title: data.title,
    category: data.category,
    upvotes: 0,
    status: "suggestion",
    description: data.detail,
    comments: [],
  };
  return request;
};
