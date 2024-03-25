import { TextareaProps } from "./types";
import styles from "./Textarea.module.css";

const Textarea = ({ cols, rows, width }: TextareaProps) => {
  return (
    <textarea
      className={styles.textarea}
      style={{ width }}
      cols={cols}
      rows={rows}
    />
  );
};

export default Textarea;
