// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyALAz7qGcE3AJ33OnmiVjzJeXFfWL6MCms",
  authDomain: "react-auth-63d09.firebaseapp.com",
  projectId: "react-auth-63d09",
  storageBucket: "react-auth-63d09.appspot.com",
  messagingSenderId: "835817879173",
  appId: "1:835817879173:web:8a3d48af031d5d72f35bec",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export { app, auth };
