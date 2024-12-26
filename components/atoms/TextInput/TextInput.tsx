/* eslint-disable react/display-name */
import React from "react";
import { CustomTextInputProps } from "./TextInput.props";
import { LabelText, RNPTextInput } from "./TextInput.styles";
import { useAppTheme } from "@constants/theme";

const TextInput: React.FC<CustomTextInputProps> = ({
  label,
  labelColor,
  right,
  left,
  ...props
}) => {
  const { colors } = useAppTheme();
  return (
    <>
      {!!label && <LabelText>{label}</LabelText>}
      <RNPTextInput
        mode="outlined"
        {...props}
        left={left && <RNPTextInput.Icon icon={left} />}
        right={right && <RNPTextInput.Icon icon={right} />}
        secureTextEntry={props?.secureTextEntry}
        theme={{
          colors: {
            placeholder: colors.placeholderTextColor,
          },
        }}
      />
    </>
  );
};

export default TextInput;
