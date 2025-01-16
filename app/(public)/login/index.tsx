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
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as Google from "expo-auth-session/providers/google";
import * as WebBrowser from "expo-web-browser";

WebBrowser.maybeCompleteAuthSession();

const Login = () => {
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

  const [token, setToken] = useState("");
  const [userInfo, setUserInfo] = useState(null);

  const [request, response, promptAsync] = Google.useAuthRequest({
    androidClientId:
      "106330118056-v3d4verqsfsjglpo11ffum0nihq7grg7.apps.googleusercontent.com",
    iosClientId:
      "106330118056-1d9tuj6j2regpkumlftaca0iepprrigi.apps.googleusercontent.com",
    webClientId:
      "106330118056-fvtfuc36tnnvpaekul43e2f9ptm0ghuh.apps.googleusercontent.com",
  });

  useEffect(() => {
    handleEffect();
  }, [response, token]);

  async function handleEffect() {
    const user = await getLocalUser();
    console.log("user", user);
    if (!user) {
      if (response?.type === "success") {
        // setToken(response.authentication.accessToken);
        getUserInfo(response.authentication.accessToken);
      }
    } else {
      setUserInfo(user);
      console.log("loaded locally");
    }
  }

  const getLocalUser = async () => {
    const data = await AsyncStorage.getItem("@user");
    if (!data) return null;
    return JSON.parse(data);
  };

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
      await AsyncStorage.setItem("@user", JSON.stringify(user));
      setUserInfo(user);
    } catch (error) {}
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
            <GoogleButton onPress={() => promptAsync()} />
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
