export interface RegisterParams {
  email: string;
  username: string;
  password: string;
}

export interface ForgotPasswordParams {
  email: string;
}

export interface UpdateProfileParams {
  username: string;
  phone: number;
  hobby: string;
  gender: string;
  countryCode: string;
}

export interface ChangePasswordParams {
  password: string;
  oldpassword: string;
}

export interface ContactUsParams {
  username: string;
  email: string;
  Message: string;
}

export interface AddReviewParams {
  name: string;
  email: string;
  review: string;
  rating: number;
}
