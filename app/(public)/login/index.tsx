import React, { useState } from "react";
import { router } from "expo-router";
import {
  LoginFormContainer,
  RegisterText,
  ScrollViewContainer,
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
import { showError, showSuccess } from "@utils/toastMessage";
import { useDispatch } from "react-redux";
import { FireBaseAuth, FireStoreDB } from "../../../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { userData, userToken } from "@redux/slices/auth";

const Login = () => {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const { colors } = useAppTheme();
  const onLoginPress = async (values: LoginFormData) => {
    const { email, password } = values;
    setLoading(true);
    try {
      const userCredential = await signInWithEmailAndPassword(
        FireBaseAuth,
        email,
        password
      );
      const user = userCredential.user;

      if (!user.emailVerified) {
        showError("Please verify your email before logging in.");
        setLoading(false);
        await FireBaseAuth.signOut();
        return;
      }

      const token = await user.getIdToken();
      dispatch(userToken(token));

      const userDocRef = doc(FireStoreDB, "users", user.uid);
      const userDocSnap = await getDoc(userDocRef);

      if (userDocSnap.exists()) {
        const userDataFromFirestore = userDocSnap.data();
        dispatch(userData(userDataFromFirestore));
      } else {
        dispatch(
          userData({
            uid: user.uid,
            email: user.email,
          })
        );
      }
      setLoading(false);
      showSuccess("Login Successful!");
      router.replace("/(protected)/(tabs)/Home");
    } catch (error: any) {
      if (error.code === "auth/user-not-found") {
        showError("No user found with this email.");
      } else if (error.code === "auth/wrong-password") {
        showError("Incorrect password.");
      } else if (error.code === "auth/invalid-email") {
        showError("Invalid email address.");
      } else if (error.code === "auth/invalid-credential") {
        showError("Invalid Credential");
      } else {
        showError("An error occurred. Please try again.");
      }
      setLoading(false);
    }
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
            <GoogleButton />
            <FacebookButton />
          </SocialBtn>
          <OrView />
          <FormTemplate
            Component={LoginForm}
            loading={loading}
            onSubmit={onLoginPress}
          />
          <RegisterText onPress={() => router.navigate("/(public)/register")}>
            Don’t have account?<LinkText> Sign Up</LinkText>
          </RegisterText>
        </LoginFormContainer>
      </ScreenTemplate>
    </ScrollViewContainer>
  );
};

export default Login;
