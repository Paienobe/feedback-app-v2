import { Request } from "../../types";

type NewData = {
  category: string;
  status: string;
  title: string;
  detail: string;
};

export const editProductRequest = (newData: NewData, request: Request) => {
  const { category, detail, status, title } = newData;
  const updatedRequest: Request = {
    ...request,
    category,
    status,
    title,
    description: detail,
  };
  return updatedRequest;
};
