import React from "react";
import { router } from "expo-router";
import {
  LoginFormContainer,
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
import ScreenTemplate from "@templates/ScreenTemplate/ScreenTemplate";
import { ScrollView } from "react-native";
import { useAppTheme } from "@constants/theme";

const Login = () => {
  const { colors } = useAppTheme();

  const onLoginPress = async (values: LoginFormData) => {
    console.log("Login Press");
  };

  return (
    <ScrollView
      style={{ backgroundColor: colors.white }}
      showsVerticalScrollIndicator={false}
    >
      <ScreenTemplate
        img={images.loginImage}
        pagetitle={"Sign In"}
        description="It was popularised in the 1960s with the release of Letraset
        sheetscontaining Lorem Ipsum."
      >
        <LoginFormContainer>
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
      </ScreenTemplate>
    </ScrollView>
  );
};

export default Login;
