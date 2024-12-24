import React from "react";
import Button from "@/components/atoms/Button/Button";
import Facebook from "@/components/atoms/Illustrations/facebook";
import { useAppTheme } from "@/constants/theme";
import { width } from "@/lib/utils/dimensions";

const FacebookButton = () => {
  const { colors } = useAppTheme();
  return (
    <Button
      icon={() => <Facebook />}
      mode="contained"
      buttonColor={colors.textinput}
      labelStyle={{
        fontSize: 14,
        fontWeight: 600,
        color: colors.placeholderTextColor,
      }}
      onPress={() => {
        console.log("btn press");
      }}
      style={{ width: width * 0.42 }}
      uppercase={false}
    >
      Facebook
    </Button>
  );
};

export default FacebookButton;
