// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCmHZ-L2zseisPOBpQ4abKZV_uWOKwAgcg",
  authDomain: "quiz-97b18.firebaseapp.com",
  projectId: "quiz-97b18",
  storageBucket: "quiz-97b18.appspot.com",
  messagingSenderId: "273961235733",
  appId: "1:273961235733:web:3fca05dfa29ef9e917251c",
  measurementId: "G-2N7T31FM3D"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);