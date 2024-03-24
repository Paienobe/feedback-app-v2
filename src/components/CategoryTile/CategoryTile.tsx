import { useState } from "react";
import styles from "./CategoryTile.module.css";
import { useDispatch } from "react-redux";
import { filter } from "../../store/slices/productRequestsSlice";

const CategoryTile = () => {
  const categories = ["All", "UX", "UI", "Enhancement", "Bug", "Feature"];
  const [selectedCategory, setSelectedCatrgory] = useState(categories[0]);

  const dispatch = useDispatch();

  return (
    <section className={styles.category_tile}>
      {categories.map((category) => {
        const isActive = selectedCategory === category;
        return (
          <button
            className={isActive ? styles.active_btn : ""}
            key={category}
            onClick={() => {
              setSelectedCatrgory(category);
              dispatch(filter(category));
            }}
          >
            {category}
          </button>
        );
      })}
    </section>
  );
};

export default CategoryTile;
