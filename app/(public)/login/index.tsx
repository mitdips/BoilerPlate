import React, { useState } from "react";
import { router } from "expo-router";
import { SafeAreaContainer } from "@/components/templates/ScreenTemplate/ScreenTemplate.styles";
import {
  DescriptionText,
  ImageView,
  IntroText,
  LoginFormContainer,
  LoginScreenContainer,
  LoginScrollView,
  RegisterText,
  SocialBtn,
} from "./LoginScreen.styles";
import images from "../../../assets/index";
import FormTemplate from "@/components/templates/FormTemplate/FormTemplate";
import LoginForm from "@/components/organisms/LoginForm/LoginForm";
import { LoginFormData } from "./LoginScreen.props";
import { LinkText } from "@/components/organisms/LoginForm/LoginForm.styles";
import GoogleButton from "@/components/molecules/GoogleButton";
import FacebookButton from "@/components/molecules/FacebookButton";
import OrView from "@/components/molecules/OrView";

const Login = () => {
  const onLoginPress = async (values: LoginFormData) => {
    console.log("Login Press");
  };

  return (
    <SafeAreaContainer>
      <LoginScrollView keyboardShouldPersistTaps="always">
        <LoginScreenContainer>
          <LoginFormContainer>
            <ImageView source={images.loginImage} />
            <IntroText>Sign In</IntroText>
            <DescriptionText>
              It was popularised in the 1960s with the release of Letraset
              sheetscontaining Lorem Ipsum.
            </DescriptionText>
            <SocialBtn>
              <GoogleButton />
              <FacebookButton />
            </SocialBtn>

            <OrView />
            <FormTemplate Component={LoginForm} onSubmit={onLoginPress} />
            <RegisterText onPress={() => router.navigate("/(public)/register")}>
              Don’t have account?<LinkText> Sign Up</LinkText>
            </RegisterText>
          </LoginFormContainer>
        </LoginScreenContainer>
      </LoginScrollView>
    </SafeAreaContainer>
  );
};

export default Login;
