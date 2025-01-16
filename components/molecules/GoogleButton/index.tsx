import React from "react";
import Button from "@atoms/Button/Button";
import { useAppTheme } from "@constants/theme";
import Goole from "@atoms/Illustrations/google";
import { windowWidth } from "@atoms/common/common.styles";

interface GoogleProps {
  onPress: () => void;
  title: string
}

const GoogleButton: React.FC<GoogleProps> = ({ onPress, title }) => {
  const { colors } = useAppTheme();
  return (
    <Button
      icon={() => <Goole />}
      mode="contained"
      buttonColor={colors.textinput}
      labelStyle={{
        fontSize: 16,
        fontWeight: 600,
        color: colors.black,
      }}
      onPress={onPress}
      style={{ width: windowWidth / 2.2 }}
      uppercase={false}
    >
      {title}
    </Button>
  );
};

export default GoogleButton;
