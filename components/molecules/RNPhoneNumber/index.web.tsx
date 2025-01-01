import React, { forwardRef, useEffect, useState } from "react";
import { useAppTheme } from "@constants/theme";
import PhoneInput, {
  DefaultInputComponentProps,
} from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { windowHeight, windowWidth } from "@atoms/common/common.styles";
import { Text, TextStyle, ViewStyle } from "react-native";
import { RNPhoneNumberProps } from "./RNPhoneNumber.props";
import {
  LabelText,
  ViewConatiner,
} from "@molecules/RNRadioButton/RNRadioButton.styles";

const FieldPhoneNumber = forwardRef<
  DefaultInputComponentProps,
  RNPhoneNumberProps
>(({ input, meta, countryCode, setCountryCode, ...rest }, ref) => {
  const { colors } = useAppTheme();
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

  const errorText = meta.touched && meta.error && (
    <Text style={{ color: colors.error, fontSize: 12 }}>{meta.error}</Text>
  );

  const phoneInputContainerStyle: ViewStyle = {
    backgroundColor: colors.textinput,
    borderRadius: 10,
    paddingHorizontal: 20,
    width: "100%",
    height: windowHeight * 0.065,
    elevation: 0,
    borderColor: errorText ? colors.error : "transparent",
    marginTop: 5,
    borderWidth: 0,
    boxShadow: "none",
  };

  return (
    <>
      <ViewConatiner>
        <LabelText>Phone Number</LabelText>
        <PhoneInput
          placeholder="Phone number"
          value={mobile}
          onChange={(val) => {
            setMobile(val);
            input.onChange(val);
          }}
          className="custom-phone-input custom-phone-view"
          style={phoneInputContainerStyle}
        />
      </ViewConatiner>
      {meta?.error && (
        <Text style={{ color: colors.error, fontSize: 12 }}>{meta.error}</Text>
      )}
      <style>
        {`
            .custom-phone-input .PhoneInputInput {
              border: none;
              box-shadow: none;
              background: transparent;
              font-size: 16px;
              outline: none;
              width: 100%;
              margin-left:15px;
              color:${colors.placeholderTextColor} 
            }
            .custom-phone-view .PhoneInputCountry {
              margin-left:15px
            }
          `}
      </style>
    </>
  );
});

export default FieldPhoneNumber;
