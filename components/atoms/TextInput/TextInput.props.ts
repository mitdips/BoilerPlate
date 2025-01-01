import { TextInput as RNTextInput, TextInputProps } from "react-native-paper";

export type CustomTextInputProps = React.ComponentProps<typeof RNTextInput> &
  TextInputProps & {
    labelColor?: string;
    left?: React.ReactNode;
    right?: React.ReactNode;
    isRounded?: boolean;
    isWidth: boolean;
  };
