import { Request } from "../../types";

const filterRequestsByStatus = (requestSource: Request[], status: string) => {
  return requestSource.filter((request) => {
    return request.status === status;
  });
};

export default filterRequestsByStatus;
