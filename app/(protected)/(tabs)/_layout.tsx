import Dashboard from "@atoms/Illustrations/Dashboard";
import ProfileIcon from "@atoms/Illustrations/Profile";
import Search from "@atoms/Illustrations/Search";
import Settings from "@atoms/Illustrations/settings";
import Users from "@atoms/Illustrations/Users";
import { useAppTheme } from "@constants/theme";
import { Tabs } from "expo-router";
import React from "react";
import { Platform, Text } from "react-native";

export default function TabLayout() {
  const { colors } = useAppTheme();

  const iconColors = colors.backdrop;
  const isFocused = (focus: boolean) => {
    return focus ? colors.main : iconColors;
  };

  return (
    <Tabs
      initialRouteName="Home/index"
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: true,
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: 600,
        },
        tabBarStyle: Platform.select({
          ios: {
            position: "absolute",
            height: 70,
            paddingBottom: 10,
          },
          android: {
            height: 60,
            paddingBottom: 10,
            borderWidth: 1,
          },
          web: {
            height: 60,
            borderWidth: 1,
          },
        }),
      }}
    >
      <Tabs.Screen
        name="Home/index"
        options={{
          title: "Home",
          tabBarIcon: ({ focused }) => <Dashboard color={isFocused(focused)} />,
        }}
      />

      <Tabs.Screen
        name="Search/index"
        options={{
          title: "Search",
          tabBarIcon: ({ focused }) => <Search color={isFocused(focused)} />,
        }}
      />

      <Tabs.Screen
        name="Profile/index"
        options={{
          title: "Profile",
          tabBarIcon: ({ focused }) => (
            <ProfileIcon color={isFocused(focused)} />
          ),
        }}
      />

      <Tabs.Screen
        name="Settings/index"
        options={{
          title: "Settings",
          tabBarIcon: ({ focused }) => <Settings color={isFocused(focused)} />,
        }}
      />
    </Tabs>
  );
}
