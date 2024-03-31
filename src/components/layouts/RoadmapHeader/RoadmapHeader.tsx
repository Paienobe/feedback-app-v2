import { useNavigate } from "react-router-dom";
import LeftArrow from "../../svgs/LeftArrow";
import Button from "../../ui/Button/Button";
import styles from "./RoadmapHeader.module.css";

const RoadmapHeader = () => {
  const navigate = useNavigate();
  return (
    <header className={styles.roadmap_header}>
      <div>
        <button onClick={() => navigate(-1)}>
          <LeftArrow />
          Go Back
        </button>
        <p>Roadmap</p>
      </div>

      <Button
        width="9.75rem"
        height="2.75rem"
        backgroundColor="#ad1fea"
        text="+ Add Feedback"
        onClick={() => navigate("/add")}
      />
    </header>
  );
};

export default RoadmapHeader;
