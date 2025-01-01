import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import ScreenTemplate from "@templates/ScreenTemplate/ScreenTemplate";
import { useDispatch, useSelector } from "react-redux"; // Import useDispatch
import { logout } from "@redux/slices/auth"; // Import the logout action
import { RootState } from "@redux/store";
import { router } from "expo-router";

const Settings = () => {
  const { token } = useSelector((state: RootState) => state.auth);
  console.log("token: ", token);
  const dispatch = useDispatch();

  const handleLogout = () => {
    console.log("hello logout clicked");
    dispatch(logout());
    router.replace("/(public)/login");
  };

  return (
    <ScreenTemplate>
      <View>
        <TouchableOpacity onPress={handleLogout}>
          <Text>Logout</Text>
        </TouchableOpacity>
      </View>
    </ScreenTemplate>
  );
};

export default Settings;
