import React, { forwardRef, useEffect, useState } from "react";
import { useAppTheme } from "@constants/theme";
import PhoneInput from "react-native-phone-number-input";
import { windowHeight, windowWidth } from "@atoms/common/common.styles";
import { Text, TextStyle, ViewStyle } from "react-native";
import { RNPhoneNumberProps } from "./RNPhoneNumber.props";
import {
  LabelText,
  ViewConatiner,
} from "@molecules/RNRadioButton/RNRadioButton.styles";

const FieldPhoneNumber = forwardRef<PhoneInput, RNPhoneNumberProps>(
  ({ input, meta, countryCode, setCountryCode, ...rest }, ref) => {
    const { colors } = useAppTheme();
    const [mobileError, setMobileError] = useState<string | null>(null);
    const [mobile, setMobile] = useState(input.value || "");

    const [defaultCountry, setDefaultCountry] = useState(setCountryCode?.cca2);

    useEffect(() => {
      if (setCountryCode !== undefined) {
        setDefaultCountry(setCountryCode?.cca2);
      }
    }, [setCountryCode]);

    useEffect(() => {
      setMobile(input.value);
    }, [input.value]);

    const handleSendData = (data: any) => {
      countryCode(data);
    };

    const textInputProps = {
      defaultValue: mobile,
      value: mobile,
    };

    const textContainerStyle: ViewStyle = {
      backgroundColor: colors.textinput,
      paddingVertical: 0,
    };

    const flagButtonStyle: ViewStyle = {
      backgroundColor: colors.textinput,
      paddingVertical: 0,
    };

    const codeTextStyle: TextStyle = {
      fontSize: 16,
      color: colors.gray,
    };

    const textInputStyle: TextStyle = {
      fontSize: 16,
      paddingLeft: 8,
      height: 50,
      color: "#333",
    };

    const errorText = meta.touched && meta.error && (
      <Text style={{ color: colors.error, fontSize: 12 }}>{meta.error}</Text>
    );

    const phoneInputContainerStyle: ViewStyle = {
      backgroundColor: colors.textinput,
      borderRadius: 10,
      paddingHorizontal: 10,
      width: windowWidth * 0.92,
      height: windowHeight * 0.065,
      elevation: 0,
      borderWidth: 1,
      borderColor: errorText ? colors.error : "transparent",
      marginTop: 5,
    };

    return (
      <>
        <ViewConatiner>
          <LabelText>Phone Number</LabelText>
          <PhoneInput
            ref={ref}
            key={defaultCountry}
            defaultCode={defaultCountry}
            onChangeCountry={(code) => handleSendData(code)}
            layout="first"
            textInputProps={textInputProps}
            onChangeText={(val) => {
              setMobile(val);
              input.onChange(val);
            }}
            placeholder="Mobile Number"
            containerStyle={phoneInputContainerStyle}
            textContainerStyle={textContainerStyle}
            flagButtonStyle={flagButtonStyle}
            codeTextStyle={codeTextStyle}
            textInputStyle={textInputStyle}
            {...rest}
          />
        </ViewConatiner>
        {errorText}
      </>
    );
  }
);

export default FieldPhoneNumber;
