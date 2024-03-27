import Button from "../../ui/Button/Button";
import Textarea from "../../ui/Textarea/Textarea";
import styles from "./ReplyInput.module.css";

const ReplyInput = () => {
  const handleReplyInput = (text: string) => {
    console.log(text);
  };
  return (
    <form className={styles.reply_input}>
      <Textarea
        cols={10}
        rows={3.5}
        width="100%"
        text=""
        onChangeFunc={handleReplyInput}
      />
      <Button
        text="Post Reply"
        width="7.25rem"
        height="2.75rem"
        backgroundColor="#ad1fea"
        onClick={() => {}}
      />
    </form>
  );
};

export default ReplyInput;
