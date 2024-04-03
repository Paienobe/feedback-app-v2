import styles from "./CategoryTile.module.css";
import { useCategoryContextProvider } from "../../../context/CategoryContext";

const CategoryTile = () => {
  const { categories, selectedCategory, setSelectedCatrgory } =
    useCategoryContextProvider();

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
