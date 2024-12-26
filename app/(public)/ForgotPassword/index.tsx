import React from "react";
import { LoginFormContainer } from "./ForgotPassword.styles";
import images from "../../../assets/index";
import { ForgotPasswordFormData } from "./ForgotPassword.props";
import ScreenTemplate from "@templates/ScreenTemplate/ScreenTemplate";
import FormTemplate from "@templates/FormTemplate/FormTemplate";
import ForgotPasswordForm from "@organisms/ForgotPasswordForm/ForgotPasswordForm";
import { ScrollView } from "react-native";
import { useAppTheme } from "@constants/theme";

const ForgotPassword = () => {
  const onForgotPress = async (values: ForgotPasswordFormData) => {
    console.log("Forgot Press");
  };
  const { colors } = useAppTheme();

  return (
    <ScrollView
      style={{ backgroundColor: colors.white }}
      showsVerticalScrollIndicator={false}
    >
      <ScreenTemplate
        isHeader
        img={images.forgotImage}
        pagetitle={"Forgot Password"}
        description="It was popularised in the 1960s with the release of Letraset
          sheetscontaining Lorem Ipsum."
      >
        <LoginFormContainer>
          <FormTemplate
            Component={ForgotPasswordForm}
            onSubmit={onForgotPress}
          />
        </LoginFormContainer>
      </ScreenTemplate>
    </ScrollView>
  );
};

export default ForgotPassword;
