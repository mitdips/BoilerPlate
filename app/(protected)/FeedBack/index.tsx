import React, { useState } from "react";
import ScreenTemplate from "@templates/ScreenTemplate/ScreenTemplate";
import {
  ReviewsContainer,
  CheckboxContainer,
  CheckboxItem,
  CheckboxLabel,
  Textarea,
  SubmitButton,
  SubmitButtonText,
  CheckIcon,
  TextAreaView,
} from "./Feedback.style";
import { FlatList, View } from "react-native";
import { useAppTheme } from "@constants/theme";
import CheckMarkIcon from "@atoms/Illustrations/Check";
import { ButtonSubmit } from "@organisms/LoginForm/LoginForm.styles";
import { compose } from "@reduxjs/toolkit";
import { router } from "expo-router";

const reasons = [
  "Reason 1",
  "Reason 2",
  "Reason 3",
  "Reason 4",
  "Reason 5",
  "Reason 6",
  "Reason 7",
  "Reason 8",
  "Reason 9",
  "Reason 10",
  "Other",
];

const FeedBack = () => {
  const [selectedReasons, setSelectedReasons] = useState<string[]>([]);
  const [otherReason, setOtherReason] = useState("");
  const { colors } = useAppTheme();

  const handleCheckboxPress = (reason: string) => {
    if (selectedReasons.includes(reason)) {
      // Unselect the reason if already selected
      setSelectedReasons(selectedReasons.filter((item) => item !== reason));
      if (reason === "Other") {
        setOtherReason("");
      }
    } else {
      // Select the reason
      setSelectedReasons([...selectedReasons, reason]);
    }
  };

  const handleSubmit = () => {
    const finalReasons = selectedReasons.includes("Other")
      ? [...selectedReasons.filter((item) => item !== "Other"), otherReason]
      : selectedReasons;

    console.log("Submitted Reasons:", finalReasons);

    router.navigate("Home");
  };

  return (
    <ScreenTemplate title="Contact Us" isHeader>
      <ReviewsContainer>
        <FlatList
          data={reasons}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <CheckboxContainer
              onPress={() => handleCheckboxPress(item)}
              activeOpacity={0.7}
            >
              <CheckboxItem selected={selectedReasons.includes(item)}>
                {selectedReasons.includes(item) && (
                  <CheckMarkIcon color={colors.black} />
                )}
              </CheckboxItem>
              <CheckboxLabel>{item}</CheckboxLabel>
            </CheckboxContainer>
          )}
        />
        <TextAreaView style={{ flexGrow: 1 }}>
          {selectedReasons.includes("Other") && (
            <Textarea
              placeholder="Please specify your reason..."
              value={otherReason}
              onChangeText={setOtherReason}
              multiline
              placeholderTextColor={colors.placeholderTextColor}
            />
          )}
        </TextAreaView>

        {selectedReasons.length > 0 && (
          <ButtonSubmit onPress={handleSubmit}>Submit</ButtonSubmit>
        )}
      </ReviewsContainer>
    </ScreenTemplate>
  );
};

export default FeedBack;
