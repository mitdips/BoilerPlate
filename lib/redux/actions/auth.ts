import { userData, userToken } from "@redux/slices/auth";
import store from "@redux/store";
import { LoginFormData } from "@type/redux/slices/auth";
import { FireBaseAuth, FireStoreDB } from "../../../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { showError, showSuccess } from "@utils/toastMessage";
import { doc, getDoc } from "@firebase/firestore";
import { router } from "expo-router";

export const loginAction = async (values: LoginFormData) => {
  const { email, password } = values;

  try {
    const userCredential = await signInWithEmailAndPassword(
      FireBaseAuth,
      email,
      password,
    );
    const user = userCredential.user;

    if (!user.emailVerified) {
      showError("Please verify your email before logging in.");
      await FireBaseAuth.signOut();
      return;
    }

    const token = await user.getIdToken();
    store.dispatch(userToken(token));

    const userDocRef = doc(FireStoreDB, "users", user.uid);
    const userDocSnap = await getDoc(userDocRef);

    if (userDocSnap.exists()) {
      const userDataFromFirestore = userDocSnap.data();
      store.dispatch(userData(userDataFromFirestore));
    } else {
      store.dispatch(
        userData({
          uid: user.uid,
          email: user.email,
        }),
      );
    }
    showSuccess("Login Successful!");
    router.replace("/(protected)/(tabs)/Home");
  } catch (error: any) {
    console.log("error login ", error);
    if (error.code === "auth/user-not-found") {
      showError("No user found with this email.");
    } else if (error.code === "auth/wrong-password") {
      showError("Incorrect password.");
    } else if (error.code === "auth/invalid-email") {
      showError("Invalid email address.");
    } else if (error.code === "auth/invalid-credential") {
      showError("Invalid Credential");
    } else {
      showError("An error occurred. Please try again.");
    }
  }
};
