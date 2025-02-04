

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB_DSwJ8BcIVAA-ZDzVhYk0tht0sObFkAc",
  authDomain: "jroutes-8e7ec.firebaseapp.com",
  projectId: "jroutes-8e7ec",
  storageBucket: "jroutes-8e7ec.firebasestorage.app",
  messagingSenderId: "861884523501",
  appId: "1:861884523501:web:5b50ef2b29a25dc2e8bde4",
  measurementId: "G-MWB3P3JF8H"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
