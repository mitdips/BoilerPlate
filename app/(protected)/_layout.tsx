import React from "react";
import { Stack } from "expo-router";

const ProtectedLayout = () => {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="(tabs)"
    >
      <Stack.Screen name="ProductList" options={{ headerShown: false }} />
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      {/* <Stack.Screen
        name="(protected)/ContactUs"
        options={{ headerShown: false }}
      /> */}
      {/* <Stack.Screen
        name="(protected)/FeedBack"
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="(protected)/ChangePassword"
        options={{ headerShown: false }}
      /> */}
    </Stack>
  );
};

export default ProtectedLayout;
