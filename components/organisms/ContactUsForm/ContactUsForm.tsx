import React, { useState } from "react";
import { Field, useFormState } from "react-final-form";
import {
  ButtonSubmit,
  LoginFormContainer,
  LoginFormView,
} from "./ContactUsForm.styles";
import { useAppTheme } from "@constants/theme";

import { Spacer } from "@atoms/common/common.styles";
import FieldTextInput from "@molecules/FieldTextInput/FieldTextInput";
import {
  complexPasswordValidator,
  composeValidators,
  confirmPasswordValidator,
  emailValidator,
  minLengthValidator,
  requiredValidator,
} from "@utils/formValidators";
import EyeOpenIcon from "@atoms/Illustrations/EyeOpen";
import EyeCloseIcon from "@atoms/Illustrations/EyeClose";
import { ContactUsFormProps } from "./ContactUsForm.props";

const ContactUsForm: React.FC<ContactUsFormProps> = ({ form, loading }) => {
  const { colors } = useAppTheme();
  const { valid } = useFormState();
  const [secure, setSecure] = useState(true);
  const [secure1, setSecure1] = useState(true);
  const [secure2, setSecure2] = useState(true);
  return (
    <LoginFormView>
      <LoginFormContainer>
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
      </LoginFormContainer>

      <ButtonSubmit
        onPress={!loading && form.submit}
        loading={loading}
        textColor={valid ? colors.white : colors.white}
        variant={valid}
        disabled={loading}
      >
        Submit
      </ButtonSubmit>
    </LoginFormView>
  );
};

export default ContactUsForm;
