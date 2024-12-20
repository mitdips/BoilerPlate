export interface RegisterFormData {
  email: string;
  password: string;
  username: string;
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
