import React from "react";
import { router } from "expo-router";
import {
  DescriptionText,
  ImageView,
  IntroText,
  LoginFormContainer,
  LoginScreenContainer,
  LoginScrollView,
} from "../login/LoginScreen.styles";
import images from "../../../assets/index";
import FormTemplate from "@/components/templates/FormTemplate/FormTemplate";
import { ForgotPasswordFormData } from "./ForgotPasswordScreen.props";
import ForgotPasswordForm from "@/components/organisms/ForgotPasswordForm/ForgotPasswordForm";
import ScreenTemplate from "@/components/templates/ScreenTemplate/ScreenTemplate";

const ForgotPassword = () => {
  const onForgotPress = async (values: ForgotPasswordFormData) => {
    console.log("Forgot Press");
  };

  return (
    <ScreenTemplate onBackPress={() => router.back()}>
      <LoginScrollView keyboardShouldPersistTaps="always">
        <LoginScreenContainer>
          <LoginFormContainer>
            <ImageView source={images.forgotImage} />
            <IntroText>Forgot Password</IntroText>
            <DescriptionText>
              It was popularised in the 1960s with the release of Letraset
              sheetscontaining Lorem Ipsum.
            </DescriptionText>
            <FormTemplate
              Component={ForgotPasswordForm}
              onSubmit={onForgotPress}
            />
          </LoginFormContainer>
        </LoginScreenContainer>
      </LoginScrollView>
    </ScreenTemplate>
  );
};

export default ForgotPassword;
