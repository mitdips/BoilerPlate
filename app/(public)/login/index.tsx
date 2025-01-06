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
import { LoginFormData } from "./LoginScreen.props";
import GoogleButton from "@molecules/GoogleButton";
import FacebookButton from "@molecules/FacebookButton";
import OrView from "@molecules/OrView";
import FormTemplate from "@templates/FormTemplate/FormTemplate";
import LoginForm from "@organisms/LoginForm/LoginForm";
import ScreenTemplate from "@templates/ScreenTemplate/ScreenTemplate";
import { Spacer } from "@atoms/common/common.styles";
import { useAppDispatch } from "@redux/store";
import { showError, showSuccess } from "@utils/toastMessage";
import { FireBaseAuth, FireStoreDB } from "../../../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { userData, userToken } from "@redux/slices/auth";

const Login = () => {
  const [loading, setLoading] = useState(false);
  const dispatch = useAppDispatch();

  /**
   * Handles the login process when the login button is pressed.
   *
   * @param {LoginFormData} values - The login form data containing email and password.
   */
  const onLoginPress = async (values: LoginFormData) => {
    const { email, password } = values; // Extract email and password from the form data.
    setLoading(true); // Set loading state to true to indicate the process is ongoing.

    try {
      // Attempt to sign in the user with the provided email and password.
      const userCredential = await signInWithEmailAndPassword(
        FireBaseAuth,
        email,
        password
      );
      const user = userCredential.user; // Extract the user object from the credential response.

      // Check if the user's email is verified.
      if (!user.emailVerified) {
        showError("Please verify your email before logging in."); // Notify the user about email verification.
        setLoading(false); // Stop the loading indicator.
        await FireBaseAuth.signOut(); // Sign out the user.
        return; // Exit the function early since the user cannot proceed.
      }

      // Retrieve a token for the authenticated user.
      const token = await user.getIdToken();
      dispatch(userToken(token)); // Save the token in the global state for authentication.

      // Reference the Firestore document for the logged-in user.
      const userDocRef = doc(FireStoreDB, "users", user.uid);
      const userDocSnap = await getDoc(userDocRef); // Fetch the user's document snapshot.

      if (userDocSnap.exists()) {
        // If user data exists in Firestore, update the global state with it.
        const userDataFromFirestore = userDocSnap.data();
        dispatch(userData(userDataFromFirestore));
      } else {
        // If user data does not exist in Firestore, create a basic profile in the global state.
        dispatch(
          userData({
            uid: user.uid,
            email: user.email,
          })
        );
      }

      setLoading(false); // Stop the loading indicator.
      showSuccess("Login Successful!"); // Notify the user about successful login.
      router.replace("/(protected)/(tabs)/Home"); // Navigate to the home page.
    } catch (error: any) {
      // Handle authentication errors and provide feedback to the user.
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

      setLoading(false); // Stop the loading indicator after handling the error.
    }
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
        </LoginFormContainer>
      </ScreenTemplate>
    </ScrollViewContainer>
  );
};

export default Login;
