import React, { useState } from "react";
import { Field, useFormState } from "react-final-form";
import {
  ButtonSubmit,
  LoginFormContainer,
  LoginFormView,
} from "./ChangePasswordForm.styles";
import { useAppTheme } from "@constants/theme";
import { Spacer } from "@atoms/common/common.styles";
import FieldTextInput from "@molecules/FieldTextInput/FieldTextInput";
import {
  complexPasswordValidator,
  composeValidators,
  confirmPasswordValidator,
  minLengthValidator,
  requiredValidator,
} from "@utils/formValidators";
import EyeOpenIcon from "@atoms/Illustrations/EyeOpen";
import EyeCloseIcon from "@atoms/Illustrations/EyeClose";
import { ChangePasswordFormProps } from "./ChangePasswordForm.props";

const ChangePasswordForm: React.FC<ChangePasswordFormProps> = ({
  form,
  loading,
}) => {
  const { colors } = useAppTheme();
  const { valid } = useFormState();
  const [secure, setSecure] = useState(true);
  const [secure1, setSecure1] = useState(true);
  const [secure2, setSecure2] = useState(true);
  return (
    <LoginFormView>
      <LoginFormContainer>
        <Field
          name="oldpassword"
          placeholder={"Current Password"}
          component={FieldTextInput}
          keyboardType="default"
          secureTextEntry={secure}
          validate={composeValidators(
            (value) => requiredValidator("Current Password", value),
            (value) => minLengthValidator("Current Password", value),
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
        <Field
          name="password"
          placeholder={"Password"}
          component={FieldTextInput}
          keyboardType="default"
          secureTextEntry={secure1}
          validate={composeValidators(
            (value) => requiredValidator("Password", value),
            (value) => minLengthValidator("Password", value),
            complexPasswordValidator
          )}
          right={() =>
            secure1 ? (
              <EyeOpenIcon
                color={colors.gray}
                onPress={() => setSecure1(!secure1)}
              />
            ) : (
              <EyeCloseIcon
                color={colors.gray}
                onPress={() => setSecure1(!secure1)}
              />
            )
          }
        />
        <Spacer size={16} />
        <Field
          name="confirmpassword"
          placeholder={"Confirm Password"}
          component={FieldTextInput}
          keyboardType="default"
          secureTextEntry={secure2}
          validate={composeValidators(
            (value) => requiredValidator("Confirm Password", value),
            (value) => minLengthValidator("Confirm Password", value),
            confirmPasswordValidator,
            complexPasswordValidator
          )}
          right={() =>
            secure2 ? (
              <EyeOpenIcon
                color={colors.gray}
                onPress={() => setSecure2(!secure2)}
              />
            ) : (
              <EyeCloseIcon
                color={colors.gray}
                onPress={() => setSecure2(!secure2)}
              />
            )
          }
        />

        <Spacer size={16} />
      </LoginFormContainer>

      <ButtonSubmit
        onPress={!loading && form.submit}
        loading={loading}
        variant={valid}
        disabled={loading}
      >
        Change Password
      </ButtonSubmit>
    </LoginFormView>
  );
};

export default ChangePasswordForm;
