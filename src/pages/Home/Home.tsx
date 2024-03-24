import MainSection from "../../components/MainSection/MainSection";
import SideSection from "../../components/SideSection/SideSection";
import styles from "./Home.module.css";

const Home = () => {
  return (
    <section className={styles.home_page}>
      <SideSection />
      <MainSection />
    </section>
  );
};

export default Home;
