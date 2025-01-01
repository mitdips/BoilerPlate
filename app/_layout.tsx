import { useEffect } from "react";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import "react-native-reanimated";
import { Provider as ReduxProvider } from "react-redux";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import React from "react";
import store, { persistor } from "@redux/store";
import { PersistGate } from "redux-persist/integration/react";
import ThemeProvider from "../containers/ThemeProvider";
import { isWeb } from "@constants/platform";
import NotificationListener from "@molecules/NotificationListener/NotificationListener";
import Toast, { BaseToast, ErrorToast } from "react-native-toast-message";

import { useAppTheme } from "@constants/theme";
import { Text, View } from "react-native";
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const { colors } = useAppTheme();
  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  const toastConfig = {
    success: (props: any) => (
      <BaseToast
        {...props}
        style={{ top: 10, borderLeftColor: colors.main }}
        contentContainerStyle={{ paddingHorizontal: 15 }}
        text1Style={{
          fontSize: 15,
        }}
        text2Style={{
          fontSize: 13,
        }}
      />
    ),
    error: (props: any) => (
      <ErrorToast
        {...props}
        style={{ top: 10, borderLeftColor: colors.error }}
        text1Style={{
          fontSize: 15,
        }}
        text2Style={{
          fontSize: 13,
        }}
      />
    ),

    tomatoToast: ({ text1, props }: any) => (
      <View style={{ height: 60, width: "100%", backgroundColor: "tomato" }}>
        <Text>{text1}</Text>
        <Text>{props.uuid}</Text>
      </View>
    ),
  };

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <ReduxProvider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <ThemeProvider>
            {/* {!isWeb && <NotificationListener />} */}
            <Stack screenOptions={{ headerShown: false }}>
              <Stack.Screen name="(public)/welcome/index" />
              <Stack.Screen name="(protected)/(tabs)/index" />
              <Stack.Screen name="+not-found" />
            </Stack>
          </ThemeProvider>
          <Toast config={toastConfig} />
        </PersistGate>
      </ReduxProvider>
    </GestureHandlerRootView>
  );
}
