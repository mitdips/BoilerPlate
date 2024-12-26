// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { initializeFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import {
  initializeAuth,
  getReactNativePersistence,
  getAuth,
} from "firebase/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { isWeb } from "@constants/platform";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyByrtM8-vEcqpljtSxIZEwo9g6tJRJd_kM",
  authDomain: "boilerplate-55148.firebaseapp.com",
  projectId: "boilerplate-55148",
  storageBucket: "boilerplate-55148.firebasestorage.app",
  messagingSenderId: "106330118056",
  appId: "1:106330118056:web:676e63f84e9ec5cef4af9d",
  measurementId: "G-X63Z4KCZJY",
};

// Initialize Firebase
const firebaseInitializ = initializeApp(firebaseConfig);
let FireBaseApp, FireBaseFireStoreDB, FireBaseStorage;
if (isWeb) {
  FireBaseApp = getAuth(firebaseInitializ);
  FireBaseFireStoreDB = initializeFirestore(firebaseInitializ, {
    experimentalForceLongPolling: true,
  });
  FireBaseStorage = getStorage(firebaseInitializ);
} else {
  FireBaseApp = initializeAuth(firebaseInitializ, {
    persistence: getReactNativePersistence(AsyncStorage),
  });
  FireBaseFireStoreDB = initializeFirestore(firebaseInitializ, {
    experimentalForceLongPolling: true,
  });
  FireBaseStorage = getStorage(firebaseInitializ);
}

export const FireBaseAuth = FireBaseApp;
export const FireStoreDB = FireBaseFireStoreDB;
export const FirebaseStorageDB = FireBaseStorage;
