import { useEffect } from "react";
import messaging from "@react-native-firebase/messaging";
import {
  displayNotificationFromCustomData,
  initializeFirebase,
  initializeToken,
} from "../../../lib/services/notification/notification";

const NotificationListener = () => {
  // Register for remote messages
  useEffect(() => {
    initializeFirebase(); //TODO: When Lunchh time dissapper this notification permission
    initializeToken();
    // Check whether an onMessage notification is available
    const onMessagUnsubscribe = messaging().onMessage(async (remoteMessage) => {
      if (remoteMessage) {
        displayNotificationFromCustomData(remoteMessage);
      }
    });

    // Check whether an initial notification is available
    messaging()
      .getInitialNotification()
      .then(async (remoteMessage) => {
        if (remoteMessage) {
          displayNotificationFromCustomData(remoteMessage);
        }
      });

    // Check whether an onNotificationOpenedApp notification is available
    const onNotificationMessagUnsubscribe = messaging().onNotificationOpenedApp(
      (remoteMessage) => {
        if (remoteMessage) {
          displayNotificationFromCustomData(remoteMessage);
        }
      }
    );

    return () => {
      onMessagUnsubscribe();
      onNotificationMessagUnsubscribe();
    };
  }, []);
  return null;
};

export default NotificationListener;
