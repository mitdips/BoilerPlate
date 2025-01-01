import React, { useEffect, useState } from "react";
import { Field, useFormState } from "react-final-form";
import { ProfileFormProps } from "./ProfileForm.props";
import {
  ButtonSubmit,
  ForgotText,
  LoginFormContainer,
  LoginFormView,
} from "./ProfileForm.styles";
import { useAppTheme } from "@constants/theme";
import * as ImagePicker from "expo-image-picker";
import { Spacer, windowHeight, windowWidth } from "@atoms/common/common.styles";
import FieldTextInput from "@molecules/FieldTextInput/FieldTextInput";
import {
  composeValidators,
  emailValidator,
  minLengthValidator,
  mobileValidator,
  mobileValidatorWeb,
  requiredValidator,
} from "@utils/formValidators";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  Image,
  Platform,
} from "react-native";
import PhoneInput from "react-native-phone-number-input";

import { doc, getDoc, updateDoc } from "firebase/firestore";
import { FireStoreDB } from "../../../firebase";
import { getAuth } from "firebase/auth";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage"; // Import Firebase Storage
import RNPhoneNumber from "@molecules/RNPhoneNumber";
import RNRadioButton from "@molecules/RNRadioButton";
import RNDropdown from "@molecules/RNDropdown";
import images from "../../../assets/index";
import FieldPhoneNumberWeb from "@molecules/RNPhoneNumber/index.web";
import PhoneInputWithCountrySelect from "react-phone-number-input";

const ProfileForm: React.FC<ProfileFormProps> = ({ form, loading }) => {
  const { colors } = useAppTheme();
  const { valid } = useFormState();
  const [profileImage, setProfileImage] = useState<string | null>(null);
  const phoneInput = React.useRef<PhoneInput>(null);
  const phoneInputWeb = React.useRef(null);
  const [initialValues, setInitialValues] = useState<any>({});
  const [countrycode, setCountrycode] = useState("");
  const storage = getStorage();

  useEffect(() => {}, [initialValues]);

  useEffect(() => {
    const fetchLoggedInUser = async () => {
      const auth = getAuth();
      const user = auth.currentUser;

      if (user) {
        const userDocRef = doc(FireStoreDB, "users", user.uid);
        const docSnap = await getDoc(userDocRef);

        if (docSnap.exists()) {
          const userData = docSnap.data();

          setInitialValues({
            username: userData?.username || "",
            email: userData?.email || "",
            phone: userData?.phone || "",
            gender: userData?.gender || "",
            hobby: userData?.hobby || "",
            countryCode: userData?.countryCode || "",
          });
        } else {
        }
      }
    };

    fetchLoggedInUser();
  }, []);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: "images", // Updated to use ImagePicker.MediaType
      allowsEditing: false,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.canceled) {
      const selectedImage = result.assets[0].uri;
      setProfileImage(selectedImage);

      const imageRef = ref(
        storage,
        `profileImages/${new Date().toISOString()}`
      );
      const response = await fetch(selectedImage);
      const blob = await response.blob();

      await uploadBytes(imageRef, blob);

      const downloadURL = await getDownloadURL(imageRef);

      const auth = getAuth();
      const user = auth.currentUser;
      if (user) {
        const userDocRef = doc(FireStoreDB, "users", user.uid);
        await updateDoc(userDocRef, { profileImage: downloadURL });
      }
    }
  };
  form.change("countryCode", countrycode || initialValues.countryCode);
  const handleDataFromChild = (data: any) => {
    setCountrycode(data);
    form.change("countryCode", data);
  };
  return (
    <LoginFormView>
      <LoginFormContainer>
        <TouchableOpacity onPress={pickImage} style={styles.profileContainer}>
          {profileImage ? (
            <Image
              source={profileImage ? { uri: profileImage } : images.loginImage}
              style={styles.profileImage}
            />
          ) : (
            <Image source={images.loginImage} style={styles.profileImage} />
          )}
        </TouchableOpacity>
        <Field
          name="username"
          label={"Username"}
          initialValue={initialValues?.username}
          placeholder={"Username"}
          component={FieldTextInput}
          keyboardType="default"
          validate={composeValidators(
            (value) => requiredValidator("Username", value),
            (value) => minLengthValidator("Username", value)
          )}
        />
        <Spacer size={16} />
        <Field
          name="email"
          placeholder={"Email Address"}
          initialValue={initialValues?.email}
          label={"Email Address"}
          component={FieldTextInput}
          keyboardType="email-address"
          validate={composeValidators(
            (value) => requiredValidator("Email address", value),
            (value) => minLengthValidator("Email address", value),
            emailValidator
          )}
        />
        <Spacer size={16} />
        {Platform.OS === "web" ? (
          <Field
            name="phone"
            initialValue={initialValues?.phone}
            placeholder={"Phone Number"}
            label={"Phone Number"}
            countryCode={countrycode}
            setCountryCode={setCountrycode}
            component={FieldPhoneNumberWeb}
            ref={phoneInputWeb}
            validate={composeValidators(
              (value) => requiredValidator("Phone Number", value),
              (value) => mobileValidatorWeb(value, phoneInputWeb)
            )}
          />
        ) : (
          <Field
            name="phone"
            initialValue={initialValues?.phone}
            placeholder={"phone "}
            label={"Phone Number"}
            ref={phoneInput}
            setCountryCode={initialValues?.countryCode}
            countryCode={handleDataFromChild}
            component={RNPhoneNumber}
            keyboardType="numeric"
            validate={composeValidators(
              (value) => requiredValidator("Phone Number", value),
              (value) => mobileValidator(value, phoneInput)
            )}
          />
        )}
        <Spacer size={16} />
        <Field
          name="gender"
          placeholder={"gender "}
          label={"Gender"}
          initialValue={initialValues?.gender}
          component={RNRadioButton}
          validate={composeValidators((value) =>
            requiredValidator("Gender", value)
          )}
        />
        <Spacer size={16} />
        <Field
          name="hobby"
          initialValue={initialValues?.hobby}
          component={RNDropdown}
          validate={composeValidators((value) =>
            requiredValidator("hobby", value)
          )}
        />
        <Spacer size={16} />
      </LoginFormContainer>

      <ButtonSubmit
        onPress={!loading && form.submit}
        loading={loading}
        textColor={valid ? colors.white : colors.white}
        variant={valid}
        disabled={loading}
      >
        Submit
      </ButtonSubmit>
    </LoginFormView>
  );
};

const styles = StyleSheet.create({
  label: {
    fontSize: 16,
    marginBottom: 10,
    fontWeight: 400,
  },
  radioContainer: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    gap: 20,
  },
  radioOption: {
    flexDirection: "row",
    alignItems: "center",
  },
  profileContainer: {
    alignItems: "center",
    marginBottom: 20,
  },
  profileImage: {
    width: windowHeight * 0.15,
    height: windowHeight * 0.15,
    borderRadius: 100,
  },
  placeholderImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: "#d3d3d3",
  },
});

export default ProfileForm;
