import styles from "./Input.module.css";
import { InputProps } from "./types";

const Input = ({ onChangeFunc, value }: InputProps) => {
  return (
    <input
      className={styles.input}
      value={value}
      onChange={(e) => onChangeFunc(e.target.value)}
    />
  );
};

export default Input;
