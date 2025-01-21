import { useEffect } from "react";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import "react-native-reanimated"; // Import for handling animations
import { Provider as ReduxProvider } from "react-redux"; // Redux provider for state management
import { GestureHandlerRootView } from "react-native-gesture-handler"; // Gesture handler for UI interactions
import React from "react";
import store, { persistor } from "@redux/store"; // Import Redux store and persistor
import { PersistGate } from "redux-persist/integration/react"; // Persist the Redux state across sessions
import ThemeProvider from "../containers/ThemeProvider"; // Provide the theme context to the app
import { isWeb } from "@constants/platform"; // Detect platform (web or mobile)
import NotificationListener from "@molecules/NotificationListener/NotificationListener"; // Notification listener component
import Toast, { BaseToast, ErrorToast } from "react-native-toast-message"; // Toast notifications
import { MenuProvider } from "react-native-popup-menu"; // For handling pop-up menus in the app
import { useAppTheme } from "@constants/theme"; // Custom hook to access app's theme
import { Text, View } from "react-native"; // Basic React Native components

// Prevent splash screen from hiding automatically
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  // Destructure colors from the custom theme
  const { colors } = useAppTheme();

  // Load custom fonts (SpaceMono font)
  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
  });

  // Once fonts are loaded, hide the splash screen
  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  // Return null while fonts are loading
  if (!loaded) {
    return null;
  }

  // Define the custom toast notification configurations
  const toastConfig = {
    // Success toast customization
    success: (props: any) => (
      <BaseToast
        {...props}
        style={{ top: 10, borderLeftColor: colors.main }} // Customize success toast style
        contentContainerStyle={{ paddingHorizontal: 15 }} // Customize padding
        text1Style={{
          fontSize: 15, // Text size for the first line of toast
        }}
        text2Style={{
          fontSize: 13, // Text size for the second line of toast
        }}
      />
    ),
    // Error toast customization
    error: (props: any) => (
      <ErrorToast
        {...props}
        style={{ top: 10, borderLeftColor: colors.error }} // Customize error toast style
        text1Style={{
          fontSize: 15, // Text size for the first line of toast
        }}
        text2Style={{
          fontSize: 13, // Text size for the second line of toast
        }}
      />
    ),
    // Custom tomato-colored toast
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
        {/* Provide Redux store to the app */}
        <PersistGate loading={null} persistor={persistor}>
          {/* Gate to persist Redux state */}
          <MenuProvider>
            {/* Provide context for pop-up menus */}
            <ThemeProvider>
              {/* Provide theme context */}
              {/* Conditionally render NotificationListener for non-web platforms */}
              {/* {!isWeb && <NotificationListener />} */}
              <Stack screenOptions={{ headerShown: false }}>
                {/* Define the navigation stack for public and protected routes */}
                <Stack.Screen name="(public)/welcome/index" />
                <Stack.Screen name="(protected)/(tabs)/index" />
                <Stack.Screen name="+not-found" />
              </Stack>
            </ThemeProvider>
          </MenuProvider>
          {/* Display toast notifications */}
          <Toast config={toastConfig} />
        </PersistGate>
      </ReduxProvider>
    </GestureHandlerRootView>
  );
}
