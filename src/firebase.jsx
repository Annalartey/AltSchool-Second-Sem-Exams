// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAIwAZcM5PcY23oOZD8TlMnhCoWqn47SxU",
  authDomain: "try1reglogin.firebaseapp.com",
  projectId: "try1reglogin",
  storageBucket: "try1reglogin.appspot.com",
  messagingSenderId: "907618161488",
  appId: "1:907618161488:web:73c5db975b96bd24f49255",
  measurementId: "G-8JJC1Y5LZ0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth()