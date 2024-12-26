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
} from "./LoginScreen.styles";
import images from "../../../assets/index";
import { LoginFormData } from "./LoginScreen.props";
import GoogleButton from "@molecules/GoogleButton";
import FacebookButton from "@molecules/FacebookButton";
import OrView from "@molecules/OrView";
import FormTemplate from "@templates/FormTemplate/FormTemplate";
import LoginForm from "@organisms/LoginForm/LoginForm";
import { LinkText } from "@organisms/LoginForm/LoginForm.styles";
import { SafeAreaContainer } from "@templates/ScreenTemplate/ScreenTemplate.styles";

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
