import React from "react";
import { Redirect, SplashScreen } from "expo-router";
SplashScreen.preventAutoHideAsync();

const App = () => {
  const token = false;
  return (
    <>
      {token ? (
        <Redirect href="/(protected)/(tabs)" />
      ) : (
        <Redirect href="/(public)/welcome" />
      )}
    </>
  );
};
export default App;
