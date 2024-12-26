import React from "react";
import { router } from "expo-router";
import {
  DescriptionText,
  ImageView,
  IntroText,
  LoginFormContainer,
  LoginScreenContainer,
  LoginScrollView,
  RegisterText,
  SocialBtn,
} from "../login/LoginScreen.styles";
import images from "../../../assets/index";
import { RegisterFormData } from "./RegisterScreen.props";
import { SafeAreaContainer } from "@templates/ScreenTemplate/ScreenTemplate.styles";
import GoogleButton from "@molecules/GoogleButton";
import FacebookButton from "@molecules/FacebookButton";
import OrView from "@molecules/OrView";
import RegisterForm from "@organisms/RegisterForm/RegisterForm";
import FormTemplate from "@templates/FormTemplate/FormTemplate";
import { LinkText } from "@organisms/LoginForm/LoginForm.styles";

const Register = () => {
  const onRegisterPress = async (values: RegisterFormData) => {
    console.log("Register Press");
  };

  return (
    <SafeAreaContainer>
      <LoginScrollView keyboardShouldPersistTaps="always">
        <LoginScreenContainer>
          <LoginFormContainer>
            <ImageView source={images.registerImage} />
            <IntroText>Sign Up</IntroText>
            <DescriptionText>
              It was popularised in the 1960s with the release of Letraset
              sheetscontaining Lorem Ipsum.
            </DescriptionText>
            <SocialBtn>
              <GoogleButton />
              <FacebookButton />
            </SocialBtn>
            <OrView />
            <FormTemplate Component={RegisterForm} onSubmit={onRegisterPress} />
            <RegisterText onPress={() => router.navigate("/(public)/login")}>
              Do you have account? <LinkText> Sign In</LinkText>
            </RegisterText>
          </LoginFormContainer>
        </LoginScreenContainer>
      </LoginScrollView>
    </SafeAreaContainer>
  );
};

export default Register;
