import React from "react";
import { Field, useFormState } from "react-final-form";
import {
  ButtonSubmit,
  LoginFormContainer,
  LoginFormView,
} from "./ContactUsForm.styles";
import { Spacer } from "@atoms/common/common.styles";
import FieldTextInput from "@molecules/FieldTextInput/FieldTextInput";
import {
  composeValidators,
  emailValidator,
  minLengthValidator,
  requiredValidator,
} from "@utils/formValidators";
import { ContactUsFormProps } from "./ContactUsForm.props";

const ContactUsForm: React.FC<ContactUsFormProps> = ({ form, loading }) => {
  const { valid } = useFormState();
  return (
    <LoginFormView>
      <Field
        name="username"
        placeholder={"Username"}
        component={FieldTextInput}
        keyboardType="default"
        validate={composeValidators(
          (value) => requiredValidator("Username", value),
          (value) => minLengthValidator("Username", value)
        )}
      />
      <Spacer size={16} />
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
      <Spacer size={16} />
      <Field
        name="Message"
        placeholder={"Message"}
        component={FieldTextInput}
        numberOfLines={8}
        multiline
        contentStyle={{ marginTop: -10 }}
        keyboardType="default"
        validate={composeValidators(
          (value) => requiredValidator("Message", value),
          (value) => minLengthValidator("Message", value)
        )}
      />
      <Spacer size={16} />

      <ButtonSubmit
        onPress={!loading && form.submit}
        loading={loading}
        variant={valid}
        disabled={loading}
      >
        Submit
      </ButtonSubmit>
    </LoginFormView>
  );
};

export default ContactUsForm;
