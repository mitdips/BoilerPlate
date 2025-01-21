import React, { useState } from "react";
import { router } from "expo-router";
import ScreenTemplate from "@templates/ScreenTemplate/ScreenTemplate";
import TitleWithButton from "@molecules/TitleWithButton/TitleWithButton";
import ReviewForm from "@organisms/ReviewForm/ReviewForm";
import FormTemplate from "@templates/FormTemplate/FormTemplate";
import { showError, showSuccess } from "@utils/toastMessage";
import { addReview } from "@api/auth";

const AddReview = () => {
  const [loading, setLoading] = useState(false);
  const onSubmitPress = async (values: any) => {
    setLoading(true);
    addReview(values)
      .then(() => {
        showSuccess("Review saved successfully!");
        router.navigate("/(protected)/(tabs)/Home");
        setLoading(false);
      })
      .catch((error) => {
        console.log("error: ", error);
        showError(error);
        setLoading(false);
      });
  };
  return (
    <ScreenTemplate>
      <TitleWithButton text="Add Review" onBackPress={() => router.back()} />
      <FormTemplate
        Component={ReviewForm}
        loading={loading}
        onSubmit={onSubmitPress}
      />
    </ScreenTemplate>
  );
};

export default AddReview;
