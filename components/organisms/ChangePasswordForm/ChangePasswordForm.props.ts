import { FormRenderProps } from "react-final-form";

export type ChangePasswordFormValues = {
  password: string;
  confirmpassword: string;
  oldpassword: string;
};

export type ChangePasswordFormProps =
  FormRenderProps<ChangePasswordFormValues> & {
    loading?: boolean;
    forgotPress: () => void;
    isShowResendEmail?: boolean;
    resendEmailLoading?: boolean;
    handleResendEmail?: () => void;
  };
