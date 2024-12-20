export interface ForgotPasswordFormData {
  email: string;
}
export enum LoadingStatus {
  NONE = "NONE",
  INITIAL = "INITIAL",
  DELETE = "DELETE",
  MORE = "MORE",
  REFRESH = "REFRESH",
  SCREEN = "SCREEN",
  LOGIN = "LOGIN",
  RESEND_EMAIL = "RESEND_EMAIL",
}
