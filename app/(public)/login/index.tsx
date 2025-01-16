import React, { useEffect, useState } from "react";
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
import { showError, showSuccess } from "@utils/toastMessage";
import { useDispatch } from "react-redux";
import { FireBaseAuth, FireStoreDB } from "../../../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { userData, userToken } from "@redux/slices/auth";
import * as Google from "expo-auth-session/providers/google";
import * as WebBrowser from "expo-web-browser";

WebBrowser.maybeCompleteAuthSession();

const Login: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
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
      console.log('error login ', error)
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


  const [request, response, promptAsync] = Google.useAuthRequest({
    androidClientId:
      "106330118056-fcu52l7cmsk98jsuuiuljqn1rgv51mm8.apps.googleusercontent.com",
    iosClientId:
      "106330118056-4r6k6jr5ts0ujsb5ie7v2ssrn5dc9acs.apps.googleusercontent.com",
    webClientId:
      "106330118056-fvtfuc36tnnvpaekul43e2f9ptm0ghuh.apps.googleusercontent.com",
  });

  useEffect(() => {
    if (response?.type === "success") {
      getUserInfo(response?.authentication?.accessToken);
    }
  }, [response]);

  const getUserInfo = async (token: any) => {
    if (!token) return;
    try {
      const response = await fetch(
        "https://www.googleapis.com/userinfo/v2/me",
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      const user = await response.json();
      console.log('userInfo: ', user);
      const loginPress = { email: user?.email, password: 'ips@123' }
      onLoginPress(loginPress)
    } catch (error) {
      console.log('error', error)
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
            <GoogleButton onPress={() => promptAsync()} title={'Google SignIn'} />
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
