// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAZ6sHl3bJuXIR7WiALF_wrHDHKFpzCqUQ",
  authDomain: "career-hub-react-fa700.firebaseapp.com",
  projectId: "career-hub-react-fa700",
  storageBucket: "career-hub-react-fa700.firebasestorage.app",
  messagingSenderId: "268575569842",
  appId: "1:268575569842:web:ddca9981589eb78dad96ab",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
