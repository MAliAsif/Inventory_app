// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDbIwMVbl_Pf1GJy9jlihiKGpTtYL1C0vQ",
  authDomain: "user-authenticator-fe31a.firebaseapp.com",
  projectId: "user-authenticator-fe31a",
  storageBucket: "user-authenticator-fe31a.appspot.com",
  messagingSenderId: "936210775540",
  appId: "1:936210775540:web:02785042ee7af04d878da1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { app,auth };