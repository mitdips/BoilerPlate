import React, { useEffect } from "react";
import Button from "@atoms/Button/Button";
import { useAppTheme } from "@constants/theme";
import GooleIcon from "@atoms/Illustrations/google";
import { windowWidth } from "@atoms/common/common.styles";
import * as Google from "expo-auth-session/providers/google";
import { AuthRequestConfig } from "@constants/configs";
import { GoogleAuthProvider, signInWithCredential } from "firebase/auth";
import { FireBaseAuth } from "../../../firebase";
import { useDispatch } from "react-redux";
import { userData, userToken } from "@redux/slices/auth";
import { router } from "expo-router";

interface GoogleProps {
  title: string;
}

const GoogleButton: React.FC<GoogleProps> = ({ title }) => {
  const { colors } = useAppTheme();
  const dispatch = useDispatch();
  const [_, response, promptAsync] =
    Google.useIdTokenAuthRequest(AuthRequestConfig);

  const authenticateWithFirebase = async (idToken: any) => {
    try {
      const credential = GoogleAuthProvider.credential(idToken);
      const userCredential = await signInWithCredential(
        FireBaseAuth,
        credential
      );
      dispatch(userData(userCredential.user));
      dispatch(userToken(idToken));
      router.push("/(protected)/(tabs)/Home");
    } catch (error) {
      console.error("Firebase sign-in error:", error);
    }
  };

  const _onPress = () => promptAsync();

  useEffect(() => {
    if (response?.type === "success") {
      const idToken = response.params.id_token;
      authenticateWithFirebase(idToken);
    }
  }, [response]);

  return (
    <Button
      icon={() => <GooleIcon />}
      mode="contained"
      buttonColor={colors.textinput}
      labelStyle={{
        fontSize: 16,
        fontWeight: 600,
        color: colors.black,
      }}
      onPress={_onPress}
      style={{ width: windowWidth / 2.2 }}
      uppercase={false}
    >
      {title}
    </Button>
  );
};

export default GoogleButton;
