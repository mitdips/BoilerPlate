import { FormRenderProps } from "react-final-form";

export type ProfileFormValues = {
  phone(phone: any): unknown;
  phoneNumber: string;
  countryCode: number;
};

export type ProfileFormProps = FormRenderProps<ProfileFormValues> & {
  loading?: boolean;
  forgotPress: () => void;
  isShowResendEmail?: boolean;
  resendEmailLoading?: boolean;
  handleResendEmail?: () => void;
};
