import styles from "./Roadmap.module.css";
import RoadmapHeader from "../../components/layouts/RoadmapHeader/RoadmapHeader";
import RoadmapBody from "../../components/layouts/RoadmapBody/RoadmapBody";

const Roadmap = () => {
  return (
    <section className={styles.roadmap}>
      <RoadmapHeader />
      <RoadmapBody />
    </section>
  );
};

export default Roadmap;
