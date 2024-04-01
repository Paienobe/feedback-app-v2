import { Request } from "../../../types";

export type StatusTabsProps = {
  requestObject: { [x: string]: Request[] };
  selectedStatus: string;
  setSelectedStatus: React.Dispatch<React.SetStateAction<string>>;
};
