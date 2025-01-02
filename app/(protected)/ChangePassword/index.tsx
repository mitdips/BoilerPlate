import React, { useState } from "react";
import ScreenTemplate from "@templates/ScreenTemplate/ScreenTemplate";
import images from "../../../assets/index";
import { LoginFormContainer } from "../../(public)/login/LoginScreen.styles";
import FormTemplate from "@templates/FormTemplate/FormTemplate";
import ChangePasswordForm from "@organisms/ChangePasswordForm/ChangePasswordForm";
import { useAppTheme } from "@constants/theme";
import { ChangePasswordFormValues } from "@organisms/ChangePasswordForm/ChangePasswordForm.props";
import { doc, getFirestore, serverTimestamp, setDoc } from "firebase/firestore";
import {
  EmailAuthProvider,
  getAuth,
  reauthenticateWithCredential,
  updatePassword,
} from "@firebase/auth";
import { showError, showSuccess } from "@utils/toastMessage";
const ChangePassword = () => {
  const [loading, setLoading] = useState(false);
  const { colors } = useAppTheme();
  const onChangePasswordBtnPress = async (values: ChangePasswordFormValues) => {
    const { confirmpassword, oldpassword, password } = values;
    setLoading(true);

    try {
      const auth = getAuth();
      const db = getFirestore();
      const user = auth.currentUser;

      if (!user) throw new Error("User not authenticated");

      const credential = EmailAuthProvider.credential(
        user.email || "",
        oldpassword
      );
      await reauthenticateWithCredential(user, credential);

      await updatePassword(user, password);

      const userDocRef = doc(db, "users", user.uid);
      await setDoc(
        userDocRef,
        {
          passwordUpdated: true,
          updatedAt: serverTimestamp(),
        },
        { merge: true }
      );

      showSuccess("Password updated successfully!");
    } catch (error: any) {
      console.log("error: ", error);
      if (error.code === "auth/wrong-password") {
        showError("Incorrect old password.");
      } else if (error.code === "auth/weak-password") {
        showError("Password is too weak.");
      } else if (error.code === "auth/too-many-requests") {
        showError("Too many failed attempts. Please try again later.");
      } else {
        showError("Failed to update password: " + error.message);
      }
    } finally {
      setLoading(false);
    }
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
