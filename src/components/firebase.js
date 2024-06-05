// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import {getAuth} from "firebase/auth"; //register our user to firebase console
import {getFirestore} from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCNH0PI4VhX3JiBwWnh7k6RuCp32lN6os4",
  authDomain: "login-registration-c6601.firebaseapp.com",
  projectId: "login-registration-c6601",
  storageBucket: "login-registration-c6601.appspot.com",
  messagingSenderId: "777290458391",
  appId: "1:777290458391:web:a2c7cb1fca246ddc624352"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth=getAuth(); //this is for registration and password
export const db=getFirestore(app); // auth is only for reg and pass but if you want to store extra inforamtion in db then you use firestore
export default app; //this is the default file