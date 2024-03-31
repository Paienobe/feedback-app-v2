import Input from "../../ui/Input/Input";
import Textarea from "../../ui/Textarea/Textarea";
import styles from "./FeedbackForm.module.css";
import newIcon from "../../../assets/shared/icon-new-feedback.svg";
import Button from "../../ui/Button/Button";
import { useNavigate } from "react-router-dom";
import FormDropdown from "../FormDropdown/FormDropdown";
import { useState } from "react";
import { request } from "../../../store/slices/productRequestsSlice";
import { useDispatch } from "react-redux";

const FeedbackForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ title: "", detail: "" });
  const [selectedCategory, setSelectedCategory] = useState("");
  const availableCategories = ["Feature", "UI", "UX", "Enhancement", "Bug"];

  const handleTitle = (value: string) => {
    setFormData({ ...formData, title: value });
  };

  const handleDetail = (value: string) => {
    setFormData({ ...formData, detail: value });
  };

  const handleCreateRequest = () => {
    const data = { ...formData, category: selectedCategory };
    dispatch(request({ data }));
    navigate("/");
  };

  return (
    <form
      className={styles.feedback_form}
      onSubmit={(e) => {
        e.preventDefault();
        handleCreateRequest();
      }}
    >
      <h1>Create New Feedback</h1>
      <div className={styles.feedback_form_icon}>
        <img src={newIcon} alt="" />
      </div>

      <label>Feedback Title</label>
      <p>Add a short, descriptive headline</p>
      <Input value={formData.title} onChangeFunc={handleTitle} />

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
        text={formData.detail}
        width="100%"
        onChangeFunc={handleDetail}
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
