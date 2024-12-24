import { StatusBar, StatusBarProps } from "expo-status-bar";

export type RNStatusBarProps = React.ComponentProps<typeof StatusBar> &
  StatusBarProps;
