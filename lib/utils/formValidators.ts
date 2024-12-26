import { FieldValidator } from "final-form";

type Validator = FieldValidator<any>;

export const composeValidators =
  (...validators: Validator[]) =>
  (value: any, allValues: any, meta: any) =>
    validators.reduce(
      (error, validator) => error || validator(value, allValues, meta),
      undefined
    );

export const requiredValidator = (field: string, value: any) => {
  if (!value) {
    return `${field} is required`;
  }
};

export const emailValidator = (value: string) => {
  if (value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
    return "Invalid Email Address";
  }
};

export const emailOrPhoneValidator = (value: any, allValues: any) => {
  if (!value && !allValues.email && !allValues.phoneNumber) {
    return "Email or phone number is required";
  }
  return undefined;
};

export const confirmPasswordValidator = (
  confirmPassword: string,
  allValues: any
) => {
  return confirmPassword === allValues.password
    ? undefined
    : "Password does not match";
};

export const maxLengthValidator = (field: string, value: string) => {
  if (value && value.length > 12) {
    return `${field} must have atmost 15 letters`;
  }
};

export const minLengthValidator = (field: string, value: string) => {
  if (value && value.length < 3) {
    return `${field} must have atleast 5 letters`;
  }
};

export const lowercaseValidator = (field: string, value: string) => {
  if (value && !/^[a-z0-9]+$/.test(value)) {
    return `${field} must have lower case value`;
  }
};

export const websiteLinkValidator = (value: string) => {
  if (
    value &&
    !/^(?:(?:https?|ftp):\/\/)(?:\w+(?::\w+)?@)?(?:(?:[a-z0-9-\.]+\.[a-z]{2,})(?:[-a-z0-9+\._\%\!\\[\]\(\)\,\*\?\&\=\:]*){1,})|(?:(?:25[0-5]|2[0-4][0-9]|[0-1]?[0-9][0-9]?)\.(?:25[0-5]|2[0-4][0-9]|[0-1]?[0-9][0-9]?)\.(?:25[0-5]|2[0-4][0-9]|[0-1]?[0-9][0-9]?)\.(?:25[0-5]|2[0-4][0-9]|[0-1]?[0-9][0-9]?))(?:[:\/#][^#]*)?$/.test(
      value
    )
  ) {
    return "Field must be a website link only";
  }
};

export const complexPasswordValidator = (value: string) => {
  if (value) {
    const hasUpperCase = /[A-Z]/.test(value);
    const hasLowerCase = /[a-z]/.test(value);
    const hasNumber = /\d/.test(value);

    if (!hasUpperCase) {
      return "Please enter upper case letters";
    }
    if (!hasLowerCase) {
      return "Please enter lower case letters";
    }
    if (!hasNumber) {
      return "Please enter atleast one number";
    }
  } else {
    return null;
  }
};
