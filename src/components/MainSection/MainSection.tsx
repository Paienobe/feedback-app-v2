import Navbar from "../Navbar/Navbar";
import RequestHolder from "../RequestHolder/RequestHolder";
import styles from "./MainSection.module.css";

const MainSection = () => {
  return (
    <section className={styles.main_section}>
      <Navbar />
      <RequestHolder />
    </section>
  );
};

export default MainSection;
