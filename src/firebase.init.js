// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA3SPXIlC2K9iXfKdxg1kOGf2hvXhNdWpM",
  authDomain: "auth-moha-milon-practice-8c543.firebaseapp.com",
  projectId: "auth-moha-milon-practice-8c543",
  storageBucket: "auth-moha-milon-practice-8c543.firebasestorage.app",
  messagingSenderId: "142381062335",
  appId: "1:142381062335:web:1a7e882ff257d4b3e20e0a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);