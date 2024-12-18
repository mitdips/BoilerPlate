import { View, Text, Button } from "react-native";
import React from "react";
import { router } from "expo-router";

const SignUp = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Sigup</Text>
      <Button onPress={() => router.back()} title="Back" />
    </View>
  );
};

export default SignUp;
