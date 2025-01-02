import React, { useState } from "react";
import { router } from "expo-router";
import {
  LoginFormContainer,
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
import { FireBaseAuth, FireStoreDB } from "../../../firebase";
import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
} from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { showError, showSuccess } from "@utils/toastMessage";
import RNModal from "@molecules/RNModal";
const Register = () => {
  const [loading, setLoading] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const handleAccountCreated = () => {
    setIsModalVisible(false);
    router.navigate("/(public)/login");
  };
  const onRegisterPress = async (values: RegisterFormData) => {
    const { email, password, username } = values;
    setLoading(true);
    try {
      const userCredential = await createUserWithEmailAndPassword(
        FireBaseAuth,
        email,
        password
      );
      const user = userCredential.user;
      await sendEmailVerification(user);
      const userDocRef = doc(FireStoreDB, "users", user.uid);
      await setDoc(userDocRef, {
        username: username,
        email: email,
        createdAt: new Date(),
      });
      setLoading(false);
      setIsModalVisible(true);
      showSuccess("User Created Successfully!");
    } catch (error: any) {
      showError(error.message);
      setLoading(false);
    }
  };

  return (
    <ScrollViewContainer showsVerticalScrollIndicator={false}>
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
          <FormTemplate
            Component={RegisterForm}
            loading={loading}
            onSubmit={onRegisterPress}
          />
          <RegisterText>
            Do you have account?
            <LinkText onPress={() => router.replace("/(public)/login")}>
              Sign In
            </LinkText>
          </RegisterText>
        </LoginFormContainer>
      </ScreenTemplate>
      <RNModal
        title="Account Created Successfully"
        description="Your account has been created successfully. Please check your email (Also check spam) and verified"
        button1="Go To Login"
        image={images.check}
        visible={isModalVisible}
        onPress1={() => handleAccountCreated()}
        loading2={false}
      />
    </ScrollViewContainer>
  );
};

export default Register;
