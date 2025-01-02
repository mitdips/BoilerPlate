import React, { forwardRef, useEffect, useState } from "react";
import { Text, ViewStyle } from "react-native";
import { windowHeight } from "@atoms/common/common.styles";
import { useAppTheme } from "@constants/theme";
import DropDownPicker from "react-native-dropdown-picker";
import { RNDropdownProps } from "./RNDropdown.props";
import {
  LabelText,
  ViewConatiner,
} from "@molecules/RNRadioButton/RNRadioButton.styles";

const RNDropdown = forwardRef<any, RNDropdownProps>(
  ({ input, meta, ...rest }, ref) => {
    const { colors } = useAppTheme();
    const [open, setOpen] = useState(false);
    const [hobby, setHobby] = useState(input?.value || null);

    const hobbies = [
      { label: "Reading", value: "reading" },
      { label: "Traveling", value: "traveling" },
      { label: "Cooking", value: "cooking" },
      { label: "Cricket", value: "cricket" },
    ];

    const handleValueChange = (value: string | null) => {
      setHobby(value);
      input.onChange(value);
    };

    useEffect(() => {
      input.onChange(input.value);
      setHobby(input.value);
    }, [input.value]);

    const dropdownContainerStyle: ViewStyle = {
      width: "100%",
      backgroundColor: colors.textinput,
      marginBottom: 10,
      borderRadius: 15,
      paddingVertical: 5,
      borderWidth: 1,
      borderColor: meta.touched && meta.error ? "red" : colors.textinput,
      position: "absolute",
      zIndex: 3000,
    };

    const dropdownStyle: ViewStyle = {
      width: "100%",
      height: windowHeight * 0.065,
      backgroundColor: colors.textinput,
      borderWidth: 0,
      marginTop: 10,
      zIndex: 3000,
    };

    const errorText = meta.touched && meta.error && (
      <Text style={{ color: colors.error, fontSize: 12 }}>{meta.error}</Text>
    );

    return (
      <>
        <ViewConatiner>
          <LabelText>Hobby</LabelText>
          <DropDownPicker
            ref={ref}
            open={open}
            value={hobby}
            items={hobbies}
            setOpen={setOpen}
            setValue={setHobby}
            textStyle={{ color: colors.placeholderTextColor }}
            onChangeValue={handleValueChange}
            placeholder="Select Hobby"
            containerStyle={{ borderWidth: 0 }}
            dropDownContainerStyle={dropdownContainerStyle}
            style={dropdownStyle}
            zIndex={3000}
            zIndexInverse={1000}
            {...rest}
          />
        </ViewConatiner>
        {errorText}
      </>
    );
  }
);

export default RNDropdown;
