import { useState } from "react";
import styles from "./CategoryTile.module.css";

const CategoryTile = () => {
  const categories = ["All", "UX", "UI", "Enhancement", "Bug", "Feature"];
  const [selectedCategory, setSelectedCatrgory] = useState(categories[0]);

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
