import React, { forwardRef } from "react";
import { FieldTextInputProps } from "./FieldTextInput.props";
import TextInput from "@atoms/TextInput/TextInput";
import FormError from "@atoms/FormError/FormError";
import { useAppTheme } from "@constants/theme";
import { CustomTextInputProps } from "@atoms/TextInput/TextInput.props";
import { InputErrorContainer } from "@atoms/TextInput/TextInput.styles";
import { width } from "@/lib/utils/dimensions";

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
      ...rest
    },
    ref
  ) => {
    const { colors } = useAppTheme();
    const resetValue = () => input.onChange("");
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
    return (
      <>
        <InputErrorContainer invalidValue={!!(meta.touched && meta.error)}>
          <TextInput
            ref={ref}
            value={input.value}
            onChangeText={handleOnChange}
            error={meta.touched && meta.error}
            autoCapitalize="none"
            style={
              rest?.style || {
                backgroundColor: "#F5F9FE",
                color: colors?.black,
                fontSize: 14,
              }
            }
            textColor={colors.black}
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
            secureTextEntry={rest?.secureTextEntry}
            placeholderTextColor={colors.placeholderTextColor}
            outlineStyle={{
              borderColor: colors.main,
              borderWidth: 0,
              borderRadius: 10,
            }}
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
