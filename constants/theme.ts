import {
  DefaultTheme as RNPDefaultTheme,
  MD3DarkTheme as RNPDarkTheme,
  useTheme,
} from "react-native-paper";

export const DefaultTheme = {
  myOwnProperty: true,
  ...RNPDefaultTheme,
  roundness: 2,
  colors: {
    ...RNPDefaultTheme.colors,
    white: "#FFFFFF",
    main: "#3461FD",
    black: "#000000",
    gray: "#CCCCCC",
    error: "#F04438",
    skyBlue: "#B5E7FF",
    lightSkyBlue: "#B5E7FF40",
    info: "#0DC3FF",
    warning: "#FFEA00",
    success: "#00FFC2",
    placeholderTextColor: "#0000006B",
    welcomeScreenBackground: "#333849",
    activeCarouselPage: "#5D81FD",
    inActiveCarouselPage: "#D6DFFF",
  },
};

export const DarkTheme: AppTheme = {
  myOwnProperty: true,
  ...RNPDarkTheme,
  roundness: 2,
  colors: {
    ...RNPDefaultTheme.colors,
    white: "#000000",
    main: "#3461FD",
    black: "#FFFFFF",
    gray: "#888888",
    error: "#F04438",
    skyBlue: "#4A90E2",
    lightSkyBlue: "#4A90E280",
    info: "#0DC3FF",
    warning: "#FFC107",
    success: "#00FFC2",
    placeholderTextColor: "#888888",
    welcomeScreenBackground: "#333849",
    activeCarouselPage: "#5D81FD",
    inActiveCarouselPage: "#D6DFFF",
  },
};

export type AppTheme = typeof DefaultTheme;

export const useAppTheme = () => useTheme<AppTheme>();
