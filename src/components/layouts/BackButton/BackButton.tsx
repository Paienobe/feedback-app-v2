import { useNavigate } from "react-router-dom";
import styles from "./BackButton.module.css";
import leftIcon from "../../../assets/shared/icon-arrow-left.svg";

const BackButton = () => {
  const navigate = useNavigate();
  return (
    <button className={styles.back_button} onClick={() => navigate(-1)}>
      <img src={leftIcon} alt="" />
      Go Back
    </button>
  );
};

export default BackButton;
