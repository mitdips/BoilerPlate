import { View, Text, Button } from "react-native";
import React from "react";
import { router } from "expo-router";

const Welcome = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>WelcomeScreen</Text>
      <Button
        onPress={() => router.navigate("/(public)/login")}
        title="Login"
      />
      <Button
        onPress={() => router.navigate("/(public)/register")}
        title="Sigup"
      />
    </View>
  );
};

export default Welcome;
