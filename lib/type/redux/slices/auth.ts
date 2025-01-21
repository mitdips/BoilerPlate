export interface User {
  name: string;
  email: string;
  token: string;
  countryCodeAlpha: string;
  mobile: string;
}

export interface LoginFormData {
  email: string;
  password: string;
}
