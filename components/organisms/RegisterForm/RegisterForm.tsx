import React, { useState } from "react";
import { Field, useFormState } from "react-final-form";
import {
  ButtonSubmit,
  CheckboxText,
  CheckboxTextLink,
  CheckboxView,
  LoginFormContainer,
  LoginFormView,
} from "../LoginForm/LoginForm.styles";
import { useAppTheme } from "@constants/theme";
import { Spacer, windowWidth } from "@atoms/common/common.styles";
import FieldTextInput from "@molecules/FieldTextInput/FieldTextInput";
import {
  complexPasswordValidator,
  composeValidators,
  emailValidator,
  minLengthValidator,
  requiredValidator,
} from "@utils/formValidators";
import EyeOpenIcon from "@atoms/Illustrations/EyeOpen";
import EyeCloseIcon from "@atoms/Illustrations/EyeClose";
import { RegisterFormProps } from "./RegisterForm.props";
import { Text, View } from "react-native";
// import Checkbox from "@atoms/Checkbox/Checkbox";
import RNWebview from "@molecules/RNWebview";
import Checkbox from "expo-checkbox";
import { router } from "expo-router";

const RegisterForm: React.FC<RegisterFormProps> = ({ form, loading }) => {
  const { colors } = useAppTheme();
  const [checked, setChecked] = useState(false);
  const { valid } = useFormState();
  const [secure, setSecure] = useState(true);
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
      </LoginFormContainer>

      <CheckboxView>
        <Checkbox
          style={{ margin: 8, marginTop: 0 }}
          value={checked}
          onValueChange={setChecked}
          color={checked ? colors.main : undefined}
        />
        <CheckboxText>
          I’m agree to The{" "}
          <CheckboxTextLink
            onPress={() =>
              router.push({
                pathname: "/(public)/Webview",
                params: {
                  headerTitle: "Terms of Service",
                  url: "https://www.termsfeed.com/live/2cc0f9b0-8f95-4c1b-9370-a86065ba80d5",
                },
              })
            }
          >
            Terms of Service
          </CheckboxTextLink>{" "}
          and{" "}
          <CheckboxTextLink
            onPress={() =>
              router.push({
                pathname: "/(public)/Webview",
                params: {
                  headerTitle: "Privacy Policy",
                  url: "https://www.freeprivacypolicy.com/live/6d7fc3e0-cf5d-46c2-8274-94ec23e48852",
                },
              })
            }
          >
            Privacy Policy
          </CheckboxTextLink>
        </CheckboxText>
      </CheckboxView>
      <Spacer size={16} />

      <ButtonSubmit
        onPress={!loading && form.submit}
        loading={loading}
        variant={valid}
        disabled={loading}
      >
        Create Account
      </ButtonSubmit>
    </LoginFormView>
  );
};

export default RegisterForm;
