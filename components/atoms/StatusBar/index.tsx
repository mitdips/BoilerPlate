import React from "react";
import { StatusBar as RNStatusBar } from "react-native";
import { RNStatusBarProps } from "./StatusBar.props";

const StatusBar = (props: RNStatusBarProps) => {
  return <RNStatusBar {...props} />;
};

export default StatusBar;
