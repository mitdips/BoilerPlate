import React, { useState } from "react";
import ScreenTemplate from "@templates/ScreenTemplate/ScreenTemplate";
import images from "../../../assets/index";
import { LoginFormContainer } from "../../(public)/login/LoginScreen.styles";
import FormTemplate from "@templates/FormTemplate/FormTemplate";
import ChangePasswordForm from "@organisms/ChangePasswordForm/ChangePasswordForm";
import { ChangePasswordFormValues } from "@organisms/ChangePasswordForm/ChangePasswordForm.props";
import { showError, showSuccess } from "@utils/toastMessage";
import { router } from "expo-router";
import { changePassword } from "@api/auth";
const ChangePassword = () => {
  const [loading, setLoading] = useState(false);
  const onChangePasswordBtnPress = async (values: ChangePasswordFormValues) => {
    setLoading(true);
    changePassword(values)
      .then(() => {
        showSuccess("Password updated successfully!");
        router.navigate("/(protected)/(tabs)/Settings");
        setLoading(false);
      })
      .catch((error) => {
        if (error.code === "auth/network-request-failed") {
          showError(
            "Network issue. Please check your connection and try again."
          );
        } else if (error.code === "auth/wrong-password") {
          showError("Incorrect old password.");
        } else if (error.code === "auth/weak-password") {
          showError("Password is too weak.");
        } else if (error.code === "auth/too-many-requests") {
          showError("Too many failed attempts. Please try again later.");
        } else {
          showError("Failed to update password: " + error.message);
        }
        setLoading(false);
      });
  };
  return (
    <ScreenTemplate isHeader title="Change Password" img={images.changepass}>
      <LoginFormContainer>
        <FormTemplate
          Component={ChangePasswordForm}
          loading={loading}
          onSubmit={onChangePasswordBtnPress}
        />
      </LoginFormContainer>
    </ScreenTemplate>
  );
};

export default ChangePassword;
