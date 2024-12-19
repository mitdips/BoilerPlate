import { FieldValidator } from "final-form";

type Validator = FieldValidator<any>;

export const composeValidators =
  (...validators: Validator[]) =>
  (value: any, allValues: any, meta: any) =>
    validators.reduce(
      (error, validator) => error || validator(value, allValues, meta),
      undefined
    );

export const requiredValidator: Validator = (value) =>
  !value ? "errors:form.required" : undefined;

export const emailValidator: Validator = (value) => {
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
export const maxLengthValidator = (length: number) => (value: string) =>
  value && value.length > length ? "errors:form.maxLengthError" : undefined;

export const lowercaseValidator: Validator = (value) => {
  if (value && !/^[a-z0-9]+$/.test(value)) {
    return "errors:form.lowerCase";
  }
};
export const websiteLinkValidator: Validator = (value) => {
  if (
    value &&
    !/^(?:(?:https?|ftp):\/\/)(?:\w+(?::\w+)?@)?(?:(?:[a-z0-9-\.]+\.[a-z]{2,})(?:[-a-z0-9+\._\%\!\\[\]\(\)\,\*\?\&\=\:]*){1,})|(?:(?:25[0-5]|2[0-4][0-9]|[0-1]?[0-9][0-9]?)\.(?:25[0-5]|2[0-4][0-9]|[0-1]?[0-9][0-9]?)\.(?:25[0-5]|2[0-4][0-9]|[0-1]?[0-9][0-9]?)\.(?:25[0-5]|2[0-4][0-9]|[0-1]?[0-9][0-9]?))(?:[:\/#][^#]*)?$/.test(
      value
    )
  ) {
    return "errors:form.websiteLink";
  }
};
export const minLengthValidator: Validator = (value) => {
  if (value && value.length < 3) {
    return "errors:form.minLength";
  }
};

export const complexPasswordValidator = (value) => {
  if (value) {
    const hasUpperCase = /[A-Z]/.test(value);
    const hasLowerCase = /[a-z]/.test(value);
    const hasNumber = /\d/.test(value);

    if (!hasUpperCase) {
      return "errors:form.passwordError";
    }
    if (!hasLowerCase) {
      return "errors:form.passwordError";
    }
    if (!hasNumber) {
      return "errors:form.passwordError";
    }
  } else {
    return null;
  }
};
