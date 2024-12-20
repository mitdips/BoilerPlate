import { StatusBar, StatusBarProps } from "react-native";

export type RNStatusBarProps = React.ComponentProps<typeof StatusBar> &
  StatusBarProps;
