import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
  sendPasswordResetEmail,
} from "firebase/auth";
import { FireStoreDB, FireBaseAuth } from "../../firebase";
import {
  AddReviewParams,
  ChangePasswordParams,
  ContactUsParams,
  ForgotPasswordParams,
  RegisterParams,
  UpdateProfileParams,
} from "@type/api/auth";
import {
  doc,
  getDoc,
  serverTimestamp,
  setDoc,
  arrayUnion,
  updateDoc,
} from "firebase/firestore";
import {
  EmailAuthProvider,
  reauthenticateWithCredential,
  updatePassword,
} from "@firebase/auth";

export const registerUser = async (values: RegisterParams) => {
  return new Promise<void>(async (resolve, reject) => {
    try {
      const { email, password, username } = values;
      const userCredential = await createUserWithEmailAndPassword(
        FireBaseAuth,
        email,
        password
      );
      const user = userCredential.user;
      await sendEmailVerification(user);
      const userDocRef = doc(FireStoreDB, "users", user.uid);
      await setDoc(userDocRef, {
        username: username,
        email: email,
        createdAt: new Date(),
      });
      resolve();
    } catch (error: any) {
      reject(error);
    }
  });
};

export const forgotPassword = async (values: ForgotPasswordParams) => {
  return new Promise<void>(async (resolve, reject) => {
    try {
      const { email } = values;
      await sendPasswordResetEmail(FireBaseAuth, email);
      resolve();
    } catch (error: any) {
      reject(error);
    }
  });
};

export const updateProfile = async (values: UpdateProfileParams) => {
  return new Promise<void>(async (resolve, reject) => {
    try {
      const user = FireBaseAuth.currentUser;
      const { username, phone, hobby, gender, countryCode } = values;
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
        resolve();
      }
      resolve();
    } catch (error: any) {
      reject(error);
    }
  });
};

export const changePassword = async (values: ChangePasswordParams) => {
  return new Promise<void>(async (resolve, reject) => {
    try {
      const { oldpassword, password } = values;
      const user = FireBaseAuth.currentUser;
      if (!user) throw new Error("User not authenticated");
      const credential = EmailAuthProvider.credential(
        user.email || "",
        oldpassword
      );
      await reauthenticateWithCredential(user, credential);
      await updatePassword(user, password);
      const userDocRef = doc(FireStoreDB, "users", user.uid);
      await setDoc(
        userDocRef,
        {
          passwordUpdated: true,
          updatedAt: serverTimestamp(),
        },
        { merge: true }
      );

      resolve();
    } catch (error: any) {
      reject(error);
    }
  });
};

export const contactUs = async (values: ContactUsParams) => {
  return new Promise<void>(async (resolve, reject) => {
    try {
      const user = FireBaseAuth.currentUser;
      const { username, email, Message } = values;
      if (user) {
        const userDocRef = doc(FireStoreDB, "contactUs", user?.uid);
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

        resolve();
      } else {
        reject("User not authenticated.");
      }
    } catch (error: any) {
      reject("Error saving contact details.");
    }
  });
};

export const addReview = async (values: AddReviewParams) => {
  return new Promise<void>(async (resolve, reject) => {
    try {
      const { name, email, review, rating } = values;
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
          resolve();
        } catch (error) {
          reject("Error saving contact details.");
        }
      } else {
        reject("User not authenticated");
      }
    } catch (error: any) {
      reject(error);
    }
  });
};
