import { useSelector } from "react-redux";
import BackButton from "../../components/layouts/BackButton/BackButton";
import FeedbackForm from "../../components/layouts/FeedbackForm/FeedbackForm";
import styles from "./Edit.module.css";
import { RootState } from "../../store/store";
import { useParams } from "react-router-dom";

const Edit = () => {
  const { id } = useParams();
  const request = useSelector((state: RootState) => {
    return state.productRequests.value.find((request) => {
      return request.id == id;
    });
  });

  if (!request || !id) {
    return;
  }

  const requestData = {
    id,
    title: request?.title,
    category: request?.category,
    status: request?.status,
    detail: request?.description,
  };

  return (
    <section className={styles.edit_page}>
      <BackButton />
      <FeedbackForm isEdit requestData={requestData} />
    </section>
  );
};

export default Edit;
