import { FormRenderProps } from "react-final-form";

export type LoginFormValues = {
  phoneNumber: string;
  countryCode: number;
};

export type LoginFormProps = FormRenderProps<LoginFormValues> & {
  loading?: boolean;
  forgotPress: () => void;
  isShowResendEmail?: boolean;
  resendEmailLoading?: boolean;
  handleResendEmail?: () => void;
};
