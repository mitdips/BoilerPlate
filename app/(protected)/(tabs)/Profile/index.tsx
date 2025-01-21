import React, { useState } from "react";
import ScreenTemplate from "@templates/ScreenTemplate/ScreenTemplate";
import { ProfileFormData } from "./Profile.props";
import { ProfileFormContainer } from "./Profile.styles";
import FormTemplate from "@templates/FormTemplate/FormTemplate";
import ProfileForm from "@organisms/ProfileForm/ProfileForm";
import { showError, showSuccess } from "@utils/toastMessage";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { FireBaseAuth, FireStoreDB } from "../../../../firebase";
import { ScrollViewContainer } from "../../../(public)/login/LoginScreen.styles";
import { updateProfile } from "@api/auth";

const Profile = () => {
  const [loading, setLoading] = useState(false);
  const onProfilePress = async (values: ProfileFormData) => {
    setLoading(true);
    const user = FireBaseAuth.currentUser;
    if (!user) {
      showError("User not logged in. Please login first.");
      setLoading(false);
      return;
    }
    updateProfile(values, user)
      .then(() => {
        setLoading(false);
        showSuccess("Profile updated successfully!");
      })
      .catch((error) => {
        if (error.code === "permission-denied") {
          showError("You don't have permission to update this profile.");
        } else {
          showError("Failed to update profile. Please try again.");
        }
        setLoading(false);
      });
  };
  return (
    <ScrollViewContainer showsVerticalScrollIndicator={false}>
      <ScreenTemplate>
        <ProfileFormContainer>
          <FormTemplate
            Component={ProfileForm}
            loading={loading}
            onSubmit={onProfilePress}
          />
        </ProfileFormContainer>
      </ScreenTemplate>
    </ScrollViewContainer>
  );
};

export default Profile;
