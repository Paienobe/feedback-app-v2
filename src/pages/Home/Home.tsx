import MainSection from "../../components/layouts/MainSection/MainSection";
import SideSection from "../../components/layouts/SideSection/SideSection";
import { CategoryContextProvider } from "../../context/CategoryContext";
import styles from "./Home.module.css";

const Home = () => {
  return (
    <section className={styles.home_page}>
      <CategoryContextProvider>
        <SideSection />
        <MainSection />
      </CategoryContextProvider>
    </section>
  );
};

export default Home;
