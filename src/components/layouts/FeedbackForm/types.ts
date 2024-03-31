export type FeedbackFormProps = {
  isEdit: boolean;
  requestData?: {
    id: string | number;
    title: string;
    category: string;
    status: string;
    detail: string;
  };
};
