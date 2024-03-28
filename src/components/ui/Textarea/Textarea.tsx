import { TextareaProps } from "./types";
import styles from "./Textarea.module.css";

const Textarea = ({
  cols,
  rows,
  width,
  max,
  text,
  onChangeFunc,
}: TextareaProps) => {
  return (
    <textarea
      className={styles.textarea}
      style={{ width }}
      cols={cols}
      rows={rows}
      maxLength={max}
      value={text}
      onChange={(e) => onChangeFunc(e.target.value)}
    />
  );
};

export default Textarea;
