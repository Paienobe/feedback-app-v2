import { useLayoutEffect, useState } from "react";
import CategoryTile from "../CategoryTile/CategoryTile";
import NameTile from "../NameTile/NameTile";
import RoadmapTile from "../RoadmapTile/RoadmapTile";
import styles from "./SideSection.module.css";

const SideSection = () => {
  const [showMenu, setShowMenu] = useState(false);

  useLayoutEffect(() => {
    const documentBody = document.body;
    if (showMenu) {
      documentBody.style.overflowY = "hidden";
    } else {
      documentBody.style.overflowY = "visible";
    }
  }, [showMenu]);

  return (
    <section className={styles.side_section}>
      <NameTile showMenu={showMenu} setShowMenu={setShowMenu} />
      <div style={{ left: showMenu ? "0" : "100%" }}>
        <div>
          <CategoryTile />
          <RoadmapTile />
        </div>
      </div>
    </section>
  );
};

export default SideSection;
