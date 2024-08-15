// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "taskmanager-f2931.firebaseapp.com",
  projectId: "taskmanager-f2931",
  storageBucket: "taskmanager-f2931.appspot.com",
  messagingSenderId: "262732930860",
  appId: "1:262732930860:web:b944eb5d020de05e511689"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);