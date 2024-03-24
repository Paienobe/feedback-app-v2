import styles from "./LogoTile.module.css";
import bgMobile from "../../../assets/suggestions/mobile/background-header.png";
import bgDesktop from "../../../assets/suggestions/desktop/background-header.png";
import bgTablet from "../../../assets/suggestions/tablet/background-header.png";

const LogoTile = () => {
  return (
    <section className={styles.logo_tile}>
      <picture>
        <source media="(max-width:768px)" srcSet={bgTablet} />
        <source media="(max-width:480px)" srcSet={bgMobile} />
        <img src={bgDesktop} alt="" />
      </picture>

      <div>
        <p>
          <span>Frontend Mentor</span> <br /> Feedback Board
        </p>
      </div>
    </section>
  );
};

export default LogoTile;
