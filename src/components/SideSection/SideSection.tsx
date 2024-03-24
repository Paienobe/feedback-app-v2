import CategoryTile from "../CategoryTile/CategoryTile";
import LogoTile from "../NameTile/LogoTile";
import styles from "./SideSection.module.css";

const SideSection = () => {
  return (
    <section className={styles.side_section}>
      <LogoTile />
      <CategoryTile />
    </section>
  );
};

export default SideSection;
