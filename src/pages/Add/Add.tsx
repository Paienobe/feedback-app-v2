import BackButton from "../../components/layouts/BackButton/BackButton";
import FeedbackForm from "../../components/layouts/FeedbackForm/FeedbackForm";
import styles from "./Add.module.css";

const Add = () => {
  return (
    <section className={styles.add_page}>
      <BackButton />
      <FeedbackForm />
    </section>
  );
};

export default Add;
