import React, { useState } from "react";
import { LoginFormContainer } from "./ForgotPassword.styles";
import images from "../../../assets/index";
import { ForgotPasswordFormData } from "./ForgotPassword.props";
import ScreenTemplate from "@templates/ScreenTemplate/ScreenTemplate";
import FormTemplate from "@templates/FormTemplate/FormTemplate";
import ForgotPasswordForm from "@organisms/ForgotPasswordForm/ForgotPasswordForm";
import { ScrollView } from "react-native";
import { useAppTheme } from "@constants/theme";
import { FireBaseAuth } from "../../../firebase";
import { sendPasswordResetEmail } from "firebase/auth";
import { showError, showSuccess } from "@utils/toastMessage";
import { router } from "expo-router";
import { ScrollViewContainer } from "../login/LoginScreen.styles";
const ForgotPassword = () => {
  const [loading, setLoading] = useState(false);
  const { colors } = useAppTheme();
  const onForgotPress = async (values: ForgotPasswordFormData) => {
    const { email } = values;
    setLoading(true);
    try {
      await sendPasswordResetEmail(FireBaseAuth, email);
      showSuccess("Password reset email sent. Please check your inbox.");
      router.replace("/(public)/login");
    } catch (error: any) {
      if (error.code === "auth/user-not-found") {
        showError("No user found with this email.");
      } else if (error.code === "auth/invalid-email") {
        showError("Invalid email address.");
      } else {
        showError("Failed to send password reset email. Please try again.");
      }
    }
    setLoading(false);
  };

  return (
    <ScrollViewContainer showsVerticalScrollIndicator={false}>
      <ScreenTemplate
        isHeader
        img={images.forgotImage}
        pagetitle={"Forgot Password"}
        description="It was popularised in the 1960s with the release of Letraset
          sheetscontaining Lorem Ipsum."
      >
        <LoginFormContainer>
          <FormTemplate
            Component={ForgotPasswordForm}
            loading={loading}
            onSubmit={onForgotPress}
          />
        </LoginFormContainer>
      </ScreenTemplate>
    </ScrollViewContainer>
  );
};

export default ForgotPassword;
