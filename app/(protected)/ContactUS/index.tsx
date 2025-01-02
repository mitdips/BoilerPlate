import React, { useState } from "react";
import ScreenTemplate from "@templates/ScreenTemplate/ScreenTemplate";
import images from "../../../assets/index";
import { LoginFormContainer } from "../../(public)/login/LoginScreen.styles";
import FormTemplate from "@templates/FormTemplate/FormTemplate";
import { ContactUsFormValues } from "@organisms/ContactUsForm/ContactUsForm.props";
import ContactUsForm from "@organisms/ContactUsForm/ContactUsForm";
import {
  arrayUnion,
  doc,
  getDoc,
  getFirestore,
  setDoc,
  updateDoc,
} from "firebase/firestore";
import { getAuth } from "@firebase/auth";
import { showError, showSuccess } from "@utils/toastMessage";
import { router } from "expo-router";
import { FireBaseAuth, FireStoreDB } from "../../../firebase";
const ContactUS = () => {
  const [loading, setLoading] = useState(false);

  const onContactUsBtnPress = async (values: ContactUsFormValues) => {
    const { username, email, Message } = values;
    setLoading(true);
    const user = FireBaseAuth.currentUser;

    if (user) {
      try {
        const userDocRef = doc(FireStoreDB, "contactUs", user.uid);
        const userDocSnapshot = await getDoc(userDocRef);

        if (!userDocSnapshot.exists()) {
          await setDoc(userDocRef, {
            contactMessages: [],
          });
        }
        const contactMessage = {
          username,
          email,
          Message,
          timestamp: new Date(),
        };
        await updateDoc(userDocRef, {
          contactMessages: arrayUnion(contactMessage),
        });
        showSuccess("Contact details saved successfully!");
        router.navigate("/(protected)/(tabs)/Home");
      } catch (error) {
        console.log("Error saving contact details: ", error);
        showError("Error saving contact details.");
      }
    } else {
      showError("User not authenticated.");
    }
    setLoading(false);
  };
  return (
    <ScreenTemplate isHeader title="Contact Us" img={images.changepass}>
      <LoginFormContainer>
        <FormTemplate
          Component={ContactUsForm}
          loading={loading}
          onSubmit={onContactUsBtnPress}
        />
      </LoginFormContainer>
    </ScreenTemplate>
  );
};

export default ContactUS;
