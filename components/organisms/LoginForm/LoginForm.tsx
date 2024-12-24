import React, { useState } from "react";
import { Field, useFormState } from "react-final-form";
import { LoginFormProps } from "./LoginForm.props";
import {
  ButtonSubmit,
  ForgotText,
  LoginFormContainer,
  LoginFormView,
} from "./LoginForm.styles";
import { useAppTheme } from "@constants/theme";

import { Spacer } from "@atoms/common/common.styles";
import FieldTextInput from "@/components/molecules/FieldTextInput/FieldTextInput";
import {
  complexPasswordValidator,
  composeValidators,
  emailValidator,
  minLengthValidator,
  requiredValidator,
} from "@/lib/utils/formValidators";
import EyeOpenIcon from "@/components/atoms/Illustrations/EyeOpen";
import EyeCloseIcon from "@/components/atoms/Illustrations/EyeClose";
import { router } from "expo-router";

const LoginForm: React.FC<LoginFormProps> = ({ form, loading }) => {
  const { colors } = useAppTheme();
  const { valid } = useFormState();
  const [secure, setSecure] = useState(true);
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
        <Spacer size={16} />
        <Field
          name="password"
          placeholder={"Password"}
          component={FieldTextInput}
          keyboardType="default"
          secureTextEntry={secure}
          validate={composeValidators(
            (value) => requiredValidator("Password", value),
            (value) => minLengthValidator("Password", value),
            complexPasswordValidator
          )}
          right={() =>
            secure ? (
              <EyeOpenIcon
                color={colors.gray}
                onPress={() => setSecure(!secure)}
              />
            ) : (
              <EyeCloseIcon
                color={colors.gray}
                onPress={() => setSecure(!secure)}
              />
            )
          }
        />
        <Spacer size={16} />
        <ForgotText onPress={() => router.navigate("/(public)/ForgotPassword")}>
          Forgot Password?
        </ForgotText>
        <Spacer size={16} />
      </LoginFormContainer>

      <ButtonSubmit
        onPress={!loading && form.submit}
        loading={loading}
        textColor={valid ? colors.white : colors.white}
        variant={valid}
        disabled={loading}
      >
        Log In
      </ButtonSubmit>
    </LoginFormView>
  );
};

export default LoginForm;
