import { Platform } from "react-native";

export const isIOS = Platform.OS === "ios";
export const isAndroid = Platform.OS === "android";
export const isNative = isIOS || isAndroid;
export const isWeb = !isNative;
export const isMobileWeb =
  isWeb &&
  global.window.matchMedia("only screen and (max-width: 1000px)")?.matches;
export const isDesktopWeb = isWeb && !isMobileWeb;
