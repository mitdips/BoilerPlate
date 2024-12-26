import { windowWidth } from "@atoms/common/common.styles";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  checkboxContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 8,
  },
  label: {
    width: windowWidth * 0.8,
  },
});
