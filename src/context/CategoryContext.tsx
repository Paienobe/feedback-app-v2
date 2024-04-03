import { ReactNode, createContext, useContext, useState } from "react";
import { CategoryContextType } from "./types";

export const CategoryContext = createContext({} as CategoryContextType);

type Props = {
  children: ReactNode;
};

export const CategoryContextProvider = ({ children }: Props) => {
  const categories = ["All", "UX", "UI", "Enhancement", "Bug", "Feature"];
  const [selectedCategory, setSelectedCatrgory] = useState(categories[0]);

  return (
    <CategoryContext.Provider
      value={{ selectedCategory, setSelectedCatrgory, categories }}
    >
      {children}
    </CategoryContext.Provider>
  );
};

export const useCategoryContextProvider = () => {
  return useContext(CategoryContext);
};
