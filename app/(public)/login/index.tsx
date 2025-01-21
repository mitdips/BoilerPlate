import React, { useState } from "react";
import { router } from "expo-router";
import {
  LoginFormContainer,
  RegisterText,
  ScrollViewContainer,
  SocialBtn,
} from "./LoginScreen.styles";
import images from "../../../assets/index";
import GoogleButton from "@molecules/GoogleButton";
import FacebookButton from "@molecules/FacebookButton";
import OrView from "@molecules/OrView";
import FormTemplate from "@templates/FormTemplate/FormTemplate";
import LoginForm from "@organisms/LoginForm/LoginForm";
import { LinkText } from "@organisms/LoginForm/LoginForm.styles";
import ScreenTemplate from "@templates/ScreenTemplate/ScreenTemplate";
import * as WebBrowser from "expo-web-browser";
import { loginAction } from "@redux/actions/auth";
import { LoginFormData } from "./LoginScreen.props";

WebBrowser.maybeCompleteAuthSession();

const Login: React.FC = () => {
  const [loading, setLoading] = useState(false);

  const onLoginPress = (values: LoginFormData) => {
    setLoading(true);
    loginAction(values).finally(() => setLoading(false));
  };

  return (
    <ScrollViewContainer showsVerticalScrollIndicator={false}>
      <ScreenTemplate
        img={images.loginImage}
        pagetitle={"Sign In"}
        description="It was popularised in the 1960s with the release of Letraset
        sheetscontaining Lorem Ipsum."
      >
        <LoginFormContainer>
          <SocialBtn>
            <GoogleButton title={"Google SignIn"} />
            <FacebookButton />
          </SocialBtn>
          <OrView />
          <FormTemplate
            Component={LoginForm}
            loading={loading}
            onSubmit={onLoginPress}
          />
          <RegisterText>
            Don’t have account?
            <LinkText onPress={() => router.navigate("/(public)/register")}>
              Sign Up
            </LinkText>
          </RegisterText>
        </LoginFormContainer>
      </ScreenTemplate>
    </ScrollViewContainer>
  );
};

export default Login;
