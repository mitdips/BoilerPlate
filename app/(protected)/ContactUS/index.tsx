import React, { useCallback, useState } from "react";
import ScreenTemplate from "@templates/ScreenTemplate/ScreenTemplate";
import images from "../../../assets/index";
import FormTemplate from "@templates/FormTemplate/FormTemplate";
import { ContactUsFormValues } from "@organisms/ContactUsForm/ContactUsForm.props";
import ContactUsForm from "@organisms/ContactUsForm/ContactUsForm";
import { showError, showSuccess } from "@utils/toastMessage";
import { router } from "expo-router";
import { LoginFormContainer } from "@organisms/ContactUsForm/ContactUsForm.styles";
import { contactUs } from "@api/auth";

const ContactUS: React.FC = () => {
  const [loading, setLoading] = useState(false);

  const onContactUsBtnPress = useCallback(
    async (values: ContactUsFormValues) => {
      setLoading(true);
      contactUs(values)
        .then(() => {
          showSuccess("Contact details saved successfully!");
          router.navigate("/(protected)/(tabs)/Home");
          setLoading(false);
        })
        .catch((error) => {
          showError(error);
          setLoading(false);
        });
    },
    [router]
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
