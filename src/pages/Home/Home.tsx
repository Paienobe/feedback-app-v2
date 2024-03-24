import MainSection from "../../components/layouts/MainSection/MainSection";
import SideSection from "../../components/layouts/SideSection/SideSection";
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
