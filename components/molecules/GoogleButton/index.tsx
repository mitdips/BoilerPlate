import React from "react";
import Button from "@/components/atoms/Button/Button";
import { useAppTheme } from "@/constants/theme";
import { width } from "@/lib/utils/dimensions";
import Goole from "@/components/atoms/Illustrations/google";

const GoogleButton = () => {
  const { colors } = useAppTheme();
  return (
    <Button
      icon={() => <Goole />}
      mode="contained"
      buttonColor={colors.textinput}
      labelStyle={{
        color: colors.gray,
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

export default GoogleButton;
