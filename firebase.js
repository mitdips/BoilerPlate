// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getToken, getMessaging } from "firebase/messaging";
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
const app = initializeApp(firebaseConfig);
const messaging = getMessaging(app);

export { app, messaging, getToken };
