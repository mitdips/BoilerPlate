import { Text } from "react-native-paper";

interface TextProps {
  color?: string;
  variant?: "8" | "SpaceMono-Regular";
}

export type LabelProps = React.ComponentProps<typeof Text> & TextProps;
