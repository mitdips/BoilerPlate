import React, { useState } from "react";
import ScreenTemplate from "@templates/ScreenTemplate/ScreenTemplate";
import { ScrollView } from "react-native";
import { useAppTheme } from "@constants/theme";
import { useDispatch } from "react-redux";
import { ProfileFormData } from "./Profile.props";
import images from "../../../../assets/index";
import { ProfileFormContainer } from "./Profile.styles";
import FormTemplate from "@templates/FormTemplate/FormTemplate";
import ProfileForm from "@organisms/ProfileForm/ProfileForm";
import { showError, showSuccess } from "@utils/toastMessage";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { FireBaseAuth, FireStoreDB } from "../../../../firebase";
import { ScrollViewContainer } from "../../../(public)/login/LoginScreen.styles";

const Profile = () => {
  const [loading, setLoading] = useState(false);
  const { colors } = useAppTheme();
  const onLoginPress = async (values: ProfileFormData) => {
    const { email, username, phone, hobby, gender, countryCode } = values;
    setLoading(true);
    try {
      const user = FireBaseAuth.currentUser;
      if (!user) {
        showError("User not logged in. Please login first.");
        setLoading(false);
        return;
      }

      const userDocRef = doc(FireStoreDB, "users", user.uid);

      const updatedData = {
        username,
        phone,
        hobby,
        gender,
        countryCode,
        updatedAt: new Date(),
      };

      await setDoc(userDocRef, updatedData, { merge: true });

      const updatedUserSnap = await getDoc(userDocRef);
      if (updatedUserSnap.exists()) {
        showSuccess("Profile updated successfully!");
      }

      setLoading(false);
    } catch (error: any) {
      console.log("Error updating profile: ", error);

      if (error.code === "permission-denied") {
        showError("You don't have permission to update this profile.");
      } else {
        showError("Failed to update profile. Please try again.");
      }
      setLoading(false);
    }
  };
  return (
    <ScrollViewContainer showsVerticalScrollIndicator={false}>
      <ScreenTemplate>
        <ProfileFormContainer>
          <FormTemplate
            Component={ProfileForm}
            loading={loading}
            onSubmit={onLoginPress}
          />
        </ProfileFormContainer>
      </ScreenTemplate>
    </ScrollViewContainer>
  );
};

export default Profile;
