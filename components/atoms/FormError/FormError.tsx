import React from "react";
import { HelperText } from "react-native-paper";
import { FormErrorProps } from "./FormError.props";

const FormError = ({ visible, errorId, text, compact }: FormErrorProps) => {
  if (compact && !visible) {
    return null;
  }
  return (
    <HelperText type={"error"} visible={visible} padding="none">
      {errorId ? errorId : text || ""}
    </HelperText>
  );
};

export default FormError;
