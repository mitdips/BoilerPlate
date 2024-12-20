import React from "react";
import { router } from "expo-router";
import { SafeAreaContainer } from "@/components/templates/ScreenTemplate/ScreenTemplate.styles";
import {
  DescriptionText,
  ImageView,
  IntroText,
  LoginFormContainer,
  LoginScreenContainer,
  LoginScrollView,
  OrText,
  OrView,
  RegisterText,
  SocialBtn,
  ViewLine,
} from "../login/LoginScreen.styles";
import images from "../../../assets/index";
import FormTemplate from "@/components/templates/FormTemplate/FormTemplate";
import { RegisterFormData } from "./RegisterScreen.props";
import { LinkText } from "@/components/organisms/LoginForm/LoginForm.styles";
import RegisterForm from "@/components/organisms/RegisterForm/RegisterForm";
import GoogleButton from "@/components/molecules/GoogleButton";
import FacebookButton from "@/components/molecules/FacebookButton";

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
            <OrView>
              <ViewLine />
              <OrText>OR</OrText>
              <ViewLine />
            </OrView>
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
