import { FormRenderProps } from "react-final-form";

type AddReviewFormValues = {
  name: string;
  email: string;
  review: string;
  rating: number;
};

export type ReviewFormProps = FormRenderProps<AddReviewFormValues> & {
  loading?: boolean;
};
