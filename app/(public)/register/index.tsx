import React, { useState } from "react";
import { router } from "expo-router";
import {
  RegisterBottomView,
  RegisterFormContainer,
  RegisterText,
  ScrollViewContainer,
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
import { showError, showSuccess } from "@utils/toastMessage";
import RNModal from "@molecules/RNModal";
import { registerUser } from "@api/auth";
import { Spacer } from "@atoms/common/common.styles";

const Register: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const handleAccountCreated = () => {
    setIsModalVisible(false);
    router.navigate("/(public)/login");
  };

  const onRegisterPress = async (values: RegisterFormData) => {
    setLoading(true);
    registerUser(values)
      .then(() => {
        setLoading(false);
        setIsModalVisible(true);
        showSuccess("User Created Successfully!");
      })
      .catch((error) => {
        showError(error.message);
        setLoading(false);
      });
  };

  return (
    <ScrollViewContainer showsVerticalScrollIndicator={false}>
      <ScreenTemplate img={images.registerImage} pagetitle={"Sign Up"}>
        <RegisterFormContainer>
          <FormTemplate
            Component={RegisterForm}
            loading={loading}
            onSubmit={onRegisterPress}
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
              {"Do you have account? "}
              <LinkText onPress={() => router.replace("/(public)/login")}>
                Sign In
              </LinkText>
            </RegisterText>
          </RegisterBottomView>
        </RegisterFormContainer>
      </ScreenTemplate>
      {isModalVisible && (
        <RNModal
          title="Account Created Successfully"
          description="Your account has been created successfully. Please check your email (Also check spam) and verified"
          button1="Go To Login"
          image={images.check}
          visible={isModalVisible}
          onPress1={() => handleAccountCreated()}
          loading2={false}
        />
      )}
    </ScrollViewContainer>
  );
};

export default Register;
