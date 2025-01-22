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
    </Stack>
  );
};

export default ProtectedLayout;
