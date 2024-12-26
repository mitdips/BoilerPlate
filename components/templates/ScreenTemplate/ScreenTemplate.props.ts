import { SafeAreaViewProps } from "react-native-safe-area-context";

export type ScreenTemplateProps = {
  children: React.ReactNode;
  img?: React.ReactNode;
  safeAreaProps?: SafeAreaViewProps;
  backgroundColor?: string;
  addButtonText?: string;
  moreVisible?: boolean;
  onAddButtonPress?: () => void;
  title?: string;
  onBackPress?: () => void;
  statusBarColor?: string;
  isHeader?: boolean;
  pagetitle?: string;
  description?: string;
};
