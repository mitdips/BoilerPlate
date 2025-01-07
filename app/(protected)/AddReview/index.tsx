import React, { useState } from "react";
import { router } from "expo-router";
import ScreenTemplate from "@templates/ScreenTemplate/ScreenTemplate";
import TitleWithButton from "@molecules/TitleWithButton/TitleWithButton";
import ReviewForm from "@organisms/ReviewForm/ReviewForm";
import FormTemplate from "@templates/FormTemplate/FormTemplate";
import { FireBaseAuth, FireStoreDB } from "../../../firebase";
import { arrayUnion, doc, getDoc, setDoc, updateDoc } from "firebase/firestore";
import { showError, showSuccess } from "@utils/toastMessage";

const AddReview = () => {
  const [loading, setLoading] = useState(false);
  const onSubmitPress = async (values: any) => {
    const { name, email, review, rating } = values;
    setLoading(true);
    const user = FireBaseAuth.currentUser;
    if (user) {
      try {
        const userDocRef = doc(FireStoreDB, "reviews", user.uid);
        const userDocSnapshot = await getDoc(userDocRef);
        if (!userDocSnapshot.exists()) {
          await setDoc(userDocRef, {
            reviewMessages: [],
          });
        }
        const reviewMessages = {
          name,
          email,
          review,
          rating,
          timestamp: new Date(),
        };
        await updateDoc(userDocRef, {
          reviewMessages: arrayUnion(reviewMessages),
        });
        showSuccess("Review saved successfully!");
        router.navigate("/(protected)/(tabs)/Home");
      } catch (error) {
        showError("Error saving contact details.");
      }
    } else {
      showError("User not authenticated.");
    }
    setLoading(false);
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
