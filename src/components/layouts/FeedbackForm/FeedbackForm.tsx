import Input from "../../ui/Input/Input";
import Textarea from "../../ui/Textarea/Textarea";
import styles from "./FeedbackForm.module.css";
import newIcon from "../../../assets/shared/icon-new-feedback.svg";
import editIcon from "../../../assets/shared/icon-edit-feedback.svg";
import Button from "../../ui/Button/Button";
import { useNavigate } from "react-router-dom";
import FormDropdown from "../FormDropdown/FormDropdown";
import { useEffect, useState } from "react";
import {
  request,
  deleteRequest,
  edit,
} from "../../../store/slices/productRequestsSlice";
import { useDispatch } from "react-redux";
import { FeedbackFormProps } from "./types";

const FeedbackForm = ({ isEdit, requestData }: FeedbackFormProps) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ title: "", detail: "" });
  const [selectedCategory, setSelectedCategory] = useState("");
  const [status, setStatus] = useState("");
  const availableCategories = ["Feature", "UI", "UX", "Enhancement", "Bug"];
  const statuses = ["Suggestion", "Planned", "In-Progress", "Live"];

  const handleTitle = (value: string) => {
    setFormData({ ...formData, title: value });
  };

  const handleDetail = (value: string) => {
    setFormData({ ...formData, detail: value });
  };

  const handleDelete = () => {
    dispatch(deleteRequest(requestData?.id));
    navigate("/");
  };

  const handleCreateRequest = () => {
    const data = { ...formData, category: selectedCategory };
    dispatch(request({ data }));
    navigate("/");
  };

  const handleEdit = () => {
    dispatch(edit({ ...formData, category: selectedCategory, status }));
    navigate(-1);
  };

  useEffect(() => {
    if (requestData) {
      const { title, detail, category, status } = requestData;
      setFormData({ title, detail });
      setSelectedCategory(category);
      setStatus(status);
    }
  }, [requestData]);

  return (
    <form
      className={styles.feedback_form}
      onSubmit={(e) => {
        e.preventDefault();
        isEdit ? handleEdit() : handleCreateRequest();
      }}
    >
      <h1>{isEdit ? "Edit" : "Create New"} Feedback</h1>
      <div className={styles.feedback_form_icon}>
        <img src={isEdit ? editIcon : newIcon} alt="" />
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

      {isEdit && (
        <>
          <label>Update Status</label>
          <p>Change feedback status</p>
          <FormDropdown
            defaultText={status}
            dropdownOptions={statuses}
            setSelection={setStatus}
          />
        </>
      )}

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
        {isEdit && (
          <Button
            text="Delete"
            backgroundColor="#d73737"
            height="2.75rem"
            width="5.75rem"
            onClick={handleDelete}
          />
        )}

        <div>
          <Button
            text="Cancel"
            backgroundColor="#373f68"
            height="2.75rem"
            width="5.75rem"
            onClick={() => navigate(-1)}
          />

          <Button
            text={!isEdit ? "Add Feedback" : "Save Changes"}
            backgroundColor="#ad1fea"
            height="2.75rem"
            width="8.875rem"
            onClick={() => {}}
          />
        </div>
      </div>
    </form>
  );
};

export default FeedbackForm;
