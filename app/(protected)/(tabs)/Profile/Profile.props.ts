export interface ProfileFormData {
  email: string;
  username: string;
  phone: number;
  gender: string;
  address: string;
  hobby: string;
  countryCode: any;
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
