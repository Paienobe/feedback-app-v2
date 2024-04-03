import Button from "../../ui/Button/Button";
import styles from "./EmptyRequests.module.css";
import emptyIllustration from "../../../assets/suggestions/illustration-empty.svg";
import { useNavigate } from "react-router-dom";

const EmptyRequests = () => {
  const navigate = useNavigate();
  return (
    <section className={styles.empty_holder}>
      <img src={emptyIllustration} alt="" />
      <h1>There is no feedback yet.</h1>
      <p>
        Got a suggestion? Found a bug that needs to be squashed? <br /> We love
        hearing about new ideas to improve our app.
      </p>
      <Button
        text="+ Add Feedback"
        width="9.75rem"
        height="2.75rem"
        backgroundColor="var(--purple)"
        onClick={() => {
          navigate("/add");
        }}
      />
    </section>
  );
};

export default EmptyRequests;
