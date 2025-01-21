import React, { useState } from "react";
import { router } from "expo-router";
import {
  LoginFormContainer,
  RegisterText,
  ScrollViewContainer,
  SocialBtn,
  LinkText,
  RegisterBottomView,
} from "./LoginScreen.styles";
import images from "../../../assets/index";
import GoogleButton from "@molecules/GoogleButton";
import FacebookButton from "@molecules/FacebookButton";
import OrView from "@molecules/OrView";
import FormTemplate from "@templates/FormTemplate/FormTemplate";
import LoginForm from "@organisms/LoginForm/LoginForm";
import ScreenTemplate from "@templates/ScreenTemplate/ScreenTemplate";
import { Spacer } from "@atoms/common/common.styles";
import { useAppDispatch } from "@redux/store";
import * as WebBrowser from "expo-web-browser";
import { loginAction } from "@redux/actions/auth";
import { LoginFormData } from "./LoginScreen.props";

WebBrowser.maybeCompleteAuthSession();

const Login: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const dispatch = useAppDispatch();


  const onLoginPress = (values: LoginFormData) => {
    setLoading(true);
    loginAction(values).finally(() => setLoading(false));
  };

  return (
    <ScrollViewContainer showsVerticalScrollIndicator={false}>
      <ScreenTemplate img={images.loginImage} pagetitle={"Sign In"}>
        <LoginFormContainer>
          <FormTemplate
            Component={LoginForm}
            loading={loading}
            onSubmit={onLoginPress}
          />
          <Spacer size={20} />
          <OrView />
          <Spacer size={20} />
          <SocialBtn>
            <GoogleButton />
            <FacebookButton />
          </SocialBtn>
          <Spacer size={20} />
          <RegisterBottomView>
            <RegisterText>
              {"Don’t have account? "}
              <LinkText onPress={() => router.navigate("/(public)/register")}>
                Sign Up
              </LinkText>
            </RegisterText>
          </RegisterBottomView>
        </LoginFormContainer >
      </ScreenTemplate >
    </ScrollViewContainer >
  );
};

export default Login;
