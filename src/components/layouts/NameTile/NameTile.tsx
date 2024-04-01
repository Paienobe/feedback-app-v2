import styles from "./NameTile.module.css";
import bgMobile from "../../../assets/suggestions/mobile/background-header.png";
import bgDesktop from "../../../assets/suggestions/desktop/background-header.png";
import bgTablet from "../../../assets/suggestions/tablet/background-header.png";
import burger from "../../../assets/shared/mobile/icon-hamburger.svg";
import close from "../../../assets/shared/mobile/icon-close.svg";
import { useIsMobile } from "../../../hooks/useIsMobile";
import { NameTileProps } from "./types";

const NameTile = ({ showMenu, setShowMenu }: NameTileProps) => {
  const isMobile = useIsMobile();
  return (
    <section className={styles.logo_tile}>
      <picture>
        <source media="(max-width:480px)" srcSet={bgMobile} />
        <source media="(max-width:768px)" srcSet={bgTablet} />
        <img src={bgDesktop} alt="" />
      </picture>

      <div>
        <p>
          <span>Frontend Mentor</span> <br /> Feedback Board
        </p>

        {isMobile && (
          <button onClick={() => setShowMenu(!showMenu)}>
            <img src={showMenu ? close : burger} alt="" />
          </button>
        )}
      </div>
    </section>
  );
};

export default NameTile;
