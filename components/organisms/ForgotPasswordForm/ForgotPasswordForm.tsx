import React from "react";
import { Field, useFormState } from "react-final-form";
import FieldTextInput from "@molecules/FieldTextInput/FieldTextInput";
import {
  composeValidators,
  emailValidator,
  minLengthValidator,
  requiredValidator,
} from "@utils/formValidators";
import { ForgotPasswordFormProps } from "./ForgotPasswordForm.props";
import {
  ButtonSubmit,
  LoginFormContainer,
  LoginFormView,
} from "../LoginForm/LoginForm.styles";
import { Spacer } from "@atoms/common/common.styles";
const ForgotPasswordForm: React.FC<ForgotPasswordFormProps> = ({
  form,
  loading,
}) => {
  const { valid } = useFormState();
  return (
    <LoginFormView>
      <LoginFormContainer>
        <Field
          name="email"
          placeholder={"Email Address"}
          component={FieldTextInput}
          keyboardType="email-address"
          validate={composeValidators(
            (value) => requiredValidator("Email address", value),
            (value) => minLengthValidator("Email address", value),
            emailValidator
          )}
        />
      </LoginFormContainer>
      <Spacer size={16} />
      <ButtonSubmit
        onPress={!loading && form.submit}
        loading={loading}
        variant={valid}
        disabled={loading}
      >
        Continue
      </ButtonSubmit>
    </LoginFormView>
  );
};

export default ForgotPasswordForm;
