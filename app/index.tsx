import React from "react";
import { Redirect, SplashScreen } from "expo-router";
// import * as Sentry from "@sentry/react-native";
import { isRunningInExpoGo } from "expo";
import { useSelector } from "react-redux";
import { RootState } from "@redux/store";
// import { View } from "react-native";

SplashScreen.preventAutoHideAsync();

// Construct a new integration instance. This is needed to communicate between the integration and React
// const navigationIntegration = Sentry.reactNavigationIntegration({
//   enableTimeToInitialDisplay: !isRunningInExpoGo(),
// });

// Sentry.init({
//   dsn: "https://f516e19db4b65998dc7f8151a8cecae8@o4508494674264064.ingest.us.sentry.io/4508494686388224",

//   // uncomment the line below to enable Spotlight (https://spotlightjs.com)
//   // enableSpotlight: __DEV__
//   debug: false, // If `true`, Sentry will try to print out useful debugging information if something goes wrong with sending the event. Set it to `false` in production
//   tracesSampleRate: 1.0, // Set tracesSampleRate to 1.0 to capture 100% of transactions for tracing. Adjusting this value in production.
//   integrations: [
//     // Pass integration
//     navigationIntegration,
//   ],
//   enableNativeFramesTracking: !isRunningInExpoGo(), // Tracks slow and frozen frames in the application
// });

const App = () => {
  const { token } = useSelector((state: RootState) => state.auth);
  console.log("token: ", token);
  const { showOnBoarding } = useSelector((state: RootState) => state.auth);
  return (
    <>
      {token ? (
        <Redirect href="/(protected)/(tabs)/Home" />
      ) : showOnBoarding ? (
        <Redirect href="/(public)/welcome" />
      ) : (
        <Redirect href="/(public)/login" />
      )}
    </>
  );
};
// export default Sentry.wrap(App);
export default App;
