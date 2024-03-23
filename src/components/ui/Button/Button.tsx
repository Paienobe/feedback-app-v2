import styles from "./Button.module.css";
import { ButtonProps } from "./types";

const Button = ({
  text,
  width,
  height,
  backgroundColor,
  onClick,
}: ButtonProps) => {
  return (
    <button
      className={styles.button}
      style={{ width, height, backgroundColor }}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
