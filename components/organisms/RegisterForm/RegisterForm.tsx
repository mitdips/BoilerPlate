import React, { useState } from "react";
import { Field, useFormState } from "react-final-form";
import {
  ButtonSubmit,
  LoginFormContainer,
  LoginFormView,
} from "../LoginForm/LoginForm.styles";
import { useAppTheme } from "@constants/theme";
import { Spacer } from "@atoms/common/common.styles";
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
import { Text } from "react-native";
import Checkbox from "@atoms/Checkbox/Checkbox";

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
      <Checkbox
        label={
          <Text style={{ color: colors.gray, fontWeight: 400, fontSize: 14 }}>
            I’m agree to The{" "}
            <Text style={{ color: colors.main, fontWeight: 400, fontSize: 14 }}>
              Terms of Service
            </Text>{" "}
            and{" "}
            <Text style={{ color: colors.main, fontWeight: 400, fontSize: 14 }}>
              Privacy Policy
            </Text>
          </Text>
        }
        status={checked ? "checked" : "unchecked"}
        color={colors.main}
        onPress={() => setChecked(!checked)}
      />
      <Spacer size={16} />

      <ButtonSubmit
        onPress={!loading && form.submit}
        loading={loading}
        textColor={valid ? colors.white : colors.white}
        variant={valid}
        disabled={loading}
      >
        Create Account
      </ButtonSubmit>
    </LoginFormView>
  );
};

export default RegisterForm;
