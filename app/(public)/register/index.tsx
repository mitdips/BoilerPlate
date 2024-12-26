import React from "react";
import { router } from "expo-router";
import {
  LoginFormContainer,
  RegisterText,
  SocialBtn,
} from "./RegisterScreen.styles";
import images from "../../../assets/index";
import { RegisterFormData } from "./RegisterScreen.props";
import GoogleButton from "@molecules/GoogleButton";
import FacebookButton from "@molecules/FacebookButton";
import OrView from "@molecules/OrView";
import RegisterForm from "@organisms/RegisterForm/RegisterForm";
import FormTemplate from "@templates/FormTemplate/FormTemplate";
import { LinkText } from "@organisms/LoginForm/LoginForm.styles";
import ScreenTemplate from "@templates/ScreenTemplate/ScreenTemplate";
import { ScrollView } from "react-native";
import { useAppTheme } from "@constants/theme";

const Register = () => {
  const { colors } = useAppTheme();

  const onRegisterPress = async (values: RegisterFormData) => {
    console.log("RegisterFormData: ", values);
  };

  return (
    <ScrollView
      style={{ backgroundColor: colors.white }}
      showsVerticalScrollIndicator={false}
    >
      <ScreenTemplate
        img={images.registerImage}
        pagetitle={"Sign Up"}
        description="It was popularised in the 1960s with the release of Letraset
      sheetscontaining Lorem Ipsum."
      >
        <LoginFormContainer>
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
      </ScreenTemplate>
    </ScrollView>
  );
};

export default Register;
