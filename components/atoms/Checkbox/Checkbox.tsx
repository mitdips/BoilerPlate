import React from "react";
import { View, Text } from "react-native";
import { Checkbox as PaperCheckbox } from "react-native-paper";
import { styles } from "./Checkbox.styles";
import { CheckboxProps } from "./Checkbox.props";

const Checkbox: React.FC<CheckboxProps> = ({
  label,
  labelProps,
  status,
  onPress,
  color,
  ...rest
}) => {
  return (
    <View style={styles.checkboxContainer}>
      <PaperCheckbox
        status={status}
        onPress={onPress}
        {...rest}
        color={color}
      />
      <View style={styles.label}>{label}</View>
    </View>
  );
};

export default Checkbox;
