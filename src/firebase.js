// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBHdSSmadTiA-1BIeJ_09ftwOZOXBCBQoQ",
  authDomain: "color-palette-fa731.firebaseapp.com",
  projectId: "color-palette-fa731",
  storageBucket: "color-palette-fa731.appspot.com",
  messagingSenderId: "935265172894",
  appId: "1:935265172894:web:c35305b673a25544df2a8f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Export the Firestore instance
export default getFirestore();