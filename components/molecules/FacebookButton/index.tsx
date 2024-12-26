import React from "react";
import Button from "@atoms/Button/Button";
import Facebook from "@atoms/Illustrations/facebook";
import { useAppTheme } from "@constants/theme";
import { windowWidth } from "@atoms/common/common.styles";

const FacebookButton = () => {
  const { colors } = useAppTheme();
  return (
    <Button
      icon={() => <Facebook />}
      mode="contained"
      buttonColor={colors.textinput}
      labelStyle={{
        fontSize: 16,
        fontWeight: 600,
        color: colors.placeholderTextColor,
      }}
      onPress={() => {
        console.log("btn press");
      }}
      style={{ width: windowWidth * 0.42 }}
      uppercase={false}
    >
      Facebook
    </Button>
  );
};

export default FacebookButton;
