import { FormRenderProps } from "react-final-form";

export type RegisterFormValues = {
  username: string;
  email: string;
  password: string;
};

export type RegisterFormProps = FormRenderProps<RegisterFormValues> & {
  loading?: boolean;
};
