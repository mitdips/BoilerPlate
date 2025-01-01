import React, { forwardRef, useState } from "react";
import { View, Text } from "react-native";
import { RadioButton } from "react-native-paper";
import { useAppTheme } from "@constants/theme";
import { RNRadioButtonProps } from "./RNRadioButton.props";
import {
  ItemView,
  LabelText,
  ViewBox,
  ViewConatiner,
} from "./RNRadioButton.styles";

const RNRadioButton = forwardRef<any, RNRadioButtonProps>(
  ({ input, meta, ...rest }, ref) => {
    const [gender, setGender] = useState<string>(input.value || "male");
    const { colors } = useAppTheme();

    const handleValueChange = (value: string) => {
      setGender(value);
      input.onChange(value);
    };

    return (
      <>
        <ViewConatiner>
          <LabelText>Gender</LabelText>
          <RadioButton.Group
            onValueChange={handleValueChange}
            value={gender}
            {...rest}
          >
            <ViewBox>
              <ItemView>
                <RadioButton value="male" color={colors.main} />
                <LabelText>Male</LabelText>
              </ItemView>
              <ItemView>
                <RadioButton value="female" color={colors.main} />
                <LabelText>Female</LabelText>
              </ItemView>
            </ViewBox>
          </RadioButton.Group>
        </ViewConatiner>

        {meta.touched && meta.error && (
          <ErrorText style={{ color: colors.error, fontSize: 12 }}>
            {meta.error}
          </ErrorText>
        )}
      </>
    );
  }
);

export default RNRadioButton;
