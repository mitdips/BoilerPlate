/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useCallback, useState } from "react";
import ScreenTemplate from "@templates/ScreenTemplate/ScreenTemplate";
import images from "../../../assets/index";
import FormTemplate from "@templates/FormTemplate/FormTemplate";
import { ContactUsFormValues } from "@organisms/ContactUsForm/ContactUsForm.props";
import ContactUsForm from "@organisms/ContactUsForm/ContactUsForm";
import { arrayUnion, doc, getDoc, setDoc, updateDoc } from "firebase/firestore";
import { showError, showSuccess } from "@utils/toastMessage";
import { router } from "expo-router";
import { FireBaseAuth, FireStoreDB } from "../../../firebase";
import { LoginFormContainer } from "@organisms/ContactUsForm/ContactUsForm.styles";

const ContactUS: React.FC = () => {
  const [loading, setLoading] = useState(false);

  const onContactUsBtnPress = useCallback(
    async (values: ContactUsFormValues) => {
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
          showError("Error saving contact details.");
        } finally {
          setLoading(false);
        }
      } else {
        showError("User not authenticated.");
        setLoading(false);
      }
    },
    [router] // Include dependencies like `router`
  );
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
