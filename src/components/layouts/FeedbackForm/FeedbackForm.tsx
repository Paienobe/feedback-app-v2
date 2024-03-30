import Input from "../../ui/Input/Input";
import Textarea from "../../ui/Textarea/Textarea";
import styles from "./FeedbackForm.module.css";
import newIcon from "../../../assets/shared/icon-new-feedback.svg";
import Button from "../../ui/Button/Button";
import { useNavigate } from "react-router-dom";
import FormDropdown from "../FormDropdown/FormDropdown";
import { useState } from "react";

const FeedbackForm = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState("");
  const availableCategories = ["Feature", "UI", "UX", "Enhancement", "Bug"];
  return (
    <form className={styles.feedback_form} onSubmit={(e) => e.preventDefault()}>
      <h1>Create New Feedback</h1>
      <div className={styles.feedback_form_icon}>
        <img src={newIcon} alt="" />
      </div>

      <label>Feedback Title</label>
      <p>Add a short, descriptive headline</p>
      <Input value="" onChangeFunc={() => {}} />

      <label>Category</label>
      <p>Choose a category for your feedback</p>
      <FormDropdown
        defaultText={selectedCategory}
        dropdownOptions={availableCategories}
        setSelection={setSelectedCategory}
      />

      <label>Feedback Detail</label>
      <p>
        Include any specific comments on what should be improved, added, etc.
      </p>
      <Textarea
        cols={10}
        rows={3}
        text=""
        width="100%"
        onChangeFunc={() => {}}
      />

      <div className={styles.feedback_form_buttons}>
        <Button
          text="Cancel"
          backgroundColor="#373f68"
          height="2.75rem"
          width="5.75rem"
          onClick={() => navigate(-1)}
        />

        <Button
          text="Add Feedback"
          backgroundColor="#ad1fea"
          height="2.75rem"
          width="8.875rem"
          onClick={() => {}}
        />
      </div>
    </form>
  );
};

export default FeedbackForm;
