import messaging from "@react-native-firebase/messaging";
import { displayNotificationFromCustomData } from "../lib/services/notification/notification";

// Register background handler
messaging().setBackgroundMessageHandler(async (remoteMessage) => {
  if (remoteMessage) {
    // TODO: store this data will be used in the notification
    displayNotificationFromCustomData(remoteMessage);
  }
});
