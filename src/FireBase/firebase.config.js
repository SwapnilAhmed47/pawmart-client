// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB3octrp0wmYTsEjltnDhpnzhYV2vTsxR0",
  authDomain: "pawmart-7614c.firebaseapp.com",
  projectId: "pawmart-7614c",
  storageBucket: "pawmart-7614c.firebasestorage.app",
  messagingSenderId: "842594210513",
  appId: "1:842594210513:web:3db1772bcf0784178b6bf0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);