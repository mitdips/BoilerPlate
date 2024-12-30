import { useAppTheme } from "@constants/theme";
import Toast from "react-native-toast-message";
const { colors } = useAppTheme();
export const showSuccess = (message: string) => {
  Toast.show({
    swipeable: true,
    type: "success",
    text1: "Success",
    text2: message,
    position: "top",
    visibilityTime: 3000,
    autoHide: true,
    text1Style: {
      fontSize: 13,
      color: colors.white,
      fontWeight: 400,
    },
    text2Style: {
      fontSize: 14,
      color: colors.white,
      fontWeight: 500,
    },
  });
};

export const showError = (message: string) => {
  Toast.show({
    swipeable: true,
    type: "error",
    text1: "Error",
    text2: message,
    position: "top",
    visibilityTime: 3000,
    autoHide: true,
    text1Style: {
      fontSize: 13,
      color: colors.white,
      fontWeight: 400,
    },
    text2Style: {
      fontSize: 14,
      color: colors.white,
      fontWeight: 500,
    },
  });
};
