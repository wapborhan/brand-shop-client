// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDk-dRd6lqjdf8k5hiPNDwQUkQgKSIYJSE",
  authDomain: "sr-brand-shop.firebaseapp.com",
  projectId: "sr-brand-shop",
  storageBucket: "sr-brand-shop.appspot.com",
  messagingSenderId: "128717230476",
  appId: "1:128717230476:web:d9c82bc90677de484e86a9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
