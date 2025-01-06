import React from "react";
import { StatusBar as RNStatusBar } from "expo-status-bar";
import { RNStatusBarProps } from "./StatusBar.props";

const StatusBar = (props: RNStatusBarProps) => {
  return <RNStatusBar {...props} />;
};

export default StatusBar;
