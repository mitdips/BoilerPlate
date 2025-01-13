import React, { useState } from "react";
import { ViewStyle } from "react-native";
import {
  Container,
  SwitchView,
  ThumbOffText,
  ThumbOnText,
} from "./Switch.style";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import { useAppTheme } from "@constants/theme";
import { SwitchProps } from "./Switch.props";

const switchStyles: ViewStyle = {
  height: 28,
  width: 28,
  borderRadius: 14,
  justifyContent: "center",
  alignItems: "center",
};

const Switch: React.FC<SwitchProps> = ({
  status,
  onText,
  offText,
  onToggle,
}) => {
  const [turnedOn, setTurnedOn] = useState(status);
  const { colors } = useAppTheme();
  const position = useSharedValue(status ? 28 : 0);
  const toggleSwitch = () => {
    position.value = turnedOn ? 0 : 28;
    onToggle(!turnedOn);
    setTurnedOn((prevState) => !prevState);
  };
  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: withTiming(position.value, { duration: 200 }) }],
  }));
  const handleOnPress = () => {
    toggleSwitch();
  };
  return (
    <Container onPress={handleOnPress}>
      <SwitchView>
        <Animated.View
          style={[
            switchStyles,
            animatedStyle,
            {
              backgroundColor: turnedOn ? colors.main : colors.white,
            },
          ]}
        >
          {turnedOn ? (
            <ThumbOnText>{onText || "ON"}</ThumbOnText>
          ) : (
            <ThumbOffText>{offText || "OFF"}</ThumbOffText>
          )}
        </Animated.View>
      </SwitchView>
    </Container>
  );
};

export default Switch;
