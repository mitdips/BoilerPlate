import { Tabs } from "expo-router";
import React from "react";
import { Platform } from "react-native";
import { useColorScheme } from "@hooks/useColorScheme";
import { Colors } from "@constants/Colors";

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
        headerShown: false,

        tabBarStyle: Platform.select({
          ios: {
            // Use a transparent background on iOS to show the blur effect
            position: "absolute",
            height: 70,
            paddingBottom: 10,
          },
          android: {
            height: 60,
            paddingBottom: 5,
            borderWidth: 1,
          },
        }),
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: "Explore",
        }}
      />
    </Tabs>
  );
}
