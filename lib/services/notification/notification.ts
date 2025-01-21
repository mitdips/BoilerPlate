import messaging, {
  FirebaseMessagingTypes,
} from "@react-native-firebase/messaging";
import { Platform } from "react-native";

export interface requestPermissionProps {
  sound: boolean;
}

const initialPermission = {
  sound: true,
} as requestPermissionProps;

/**
 * initializeFirebase
 */
export const initializeFirebase = async () => {
  try {
    const authStatus = await messaging().requestPermission(initialPermission);
    const enabled =
      authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
      authStatus === messaging.AuthorizationStatus.PROVISIONAL;
    console.log("initializeFirebase", Platform.OS, enabled);
    if (enabled) {
      initializeToken();
    }
    return enabled;
  } catch (e) {
    return e;
  }
};

export const initializeToken = async () => {
  try {
    await messaging().registerDeviceForRemoteMessages();
    const token = await messaging().getToken();
    console.log("FCM Token:", token);
    return token;
  } catch (error) {
    console.error("Error registering for remote messages:", error);
  }
};

/**
 * Show local notification
 * @param {} remoteMessage
 */
export const displayNotificationFromCustomData = async (
  remoteMessage: FirebaseMessagingTypes.RemoteMessage,
) => {
  console.log("displayNotificationFromCustomData", remoteMessage);
};
