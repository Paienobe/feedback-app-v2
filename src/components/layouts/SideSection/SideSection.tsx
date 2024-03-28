import CategoryTile from "../CategoryTile/CategoryTile";
import LogoTile from "../NameTile/LogoTile";
import RoadmapTile from "../RoadmapTile/RoadmapTile";
import styles from "./SideSection.module.css";

const SideSection = () => {
  return (
    <section className={styles.side_section}>
      <LogoTile />
      <CategoryTile />
      <RoadmapTile />
    </section>
  );
};

export default SideSection;
