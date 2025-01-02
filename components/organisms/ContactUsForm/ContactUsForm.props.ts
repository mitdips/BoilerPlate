import { FormRenderProps } from "react-final-form";

export type ContactUsFormValues = {
  username: string;
  email: string;
  Message: string;
};

export type ContactUsFormProps = FormRenderProps<ContactUsFormValues> & {
  loading?: boolean;
  forgotPress: () => void;
  isShowResendEmail?: boolean;
  resendEmailLoading?: boolean;
  handleResendEmail?: () => void;
};
