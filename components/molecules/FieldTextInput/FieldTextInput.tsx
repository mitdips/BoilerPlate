/* eslint-disable react/display-name */
import React, { forwardRef, useState } from "react";
import { FieldTextInputProps } from "./FieldTextInput.props";
import TextInput from "@atoms/TextInput/TextInput";
import FormError from "@atoms/FormError/FormError";
import { useAppTheme } from "@constants/theme";
import { CustomTextInputProps } from "@atoms/TextInput/TextInput.props";
import { InputErrorContainer } from "@atoms/TextInput/TextInput.styles";
import { TextStyle } from "react-native";

const FieldTextInput = forwardRef<CustomTextInputProps, FieldTextInputProps>(
  (
    {
      numberOfLines,
      isFloatValue,
      input,
      meta,
      compact,
      keyboardType,
      left,
      right,
      password,
      isWidth,
      label,
      multiline,
      ...rest
    },
    ref
  ) => {
    const { colors } = useAppTheme();
    console.log("meta: ", meta);
    const [blur, setBlur] = useState<boolean>(false);
    const [focus, setFocus] = useState<boolean>(false);
    const handleOnChange = (value: string) => {
      if (keyboardType === "numeric") {
        const pattern = isFloatValue ? /^\s*\d*\.?\d*\s*$/ : /^\s*\d*\d*\s*$/;

        if (pattern.test(value)) {
          input.onChange(value?.trimStart());
        }
      } else {
        input.onChange(value?.trimStart());
      }
    };

    const inputStyle: TextStyle = {
      backgroundColor: "#F5F9FE",
      borderWidth: 1,
      borderColor:
        meta.touched && meta.error
          ? "red"
          : focus
          ? colors.main
          : colors.textinput,
      borderRadius: 10,
      textAlignVertical: multiline && "top",
      height: multiline && 100,
    };

    const outlineStyle = {
      borderColor: colors.main,
      borderWidth: 0,
      borderRadius: 10,
    };

    return (
      <>
        <InputErrorContainer
          isWidth={isWidth}
          // invalidValue={!!(meta.touched && meta.error)}
        >
          <TextInput
            label={label}
            ref={ref}
            value={input.value}
            onChangeText={handleOnChange}
            error={meta.touched && meta.error}
            autoCapitalize="none"
            style={inputStyle}
            textColor={colors.placeholderTextColor}
            enterKeyHint="done"
            autoCorrect={false}
            left={left}
            keyboardType={keyboardType}
            theme={{
              roundness: 6,
              colors: {
                primary: colors.white,
              },
            }}
            right={right}
            multiline={multiline}
            secureTextEntry={rest?.secureTextEntry}
            placeholderTextColor={colors.placeholderTextColor}
            outlineStyle={outlineStyle}
            onBlur={() => {
              setBlur(true);
              setFocus(false);
            }}
            onFocus={() => setFocus(true)}
            {...rest}
          />
        </InputErrorContainer>
        {!!(meta.touched && meta.error) && (
          <FormError
            compact={compact}
            visible={!!(meta.touched && meta.error)}
            errorId={meta.error}
          />
        )}
      </>
    );
  }
);

export default FieldTextInput;
