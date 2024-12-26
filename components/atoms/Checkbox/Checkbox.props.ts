import { CheckboxProps as PaperCheckboxProps } from "react-native-paper";
import { TextProps } from "react-native";
import { ReactNode } from "react";

export type CheckboxProps = PaperCheckboxProps & {
  label: ReactNode;
  labelProps?: TextProps;
};
