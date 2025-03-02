// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDJDQexm5pqM0Uu7h1smMgYkGP5bcOpJCI',
  authDomain: 'netflix-453b9.firebaseapp.com',
  projectId: 'netflix-453b9',
  storageBucket: 'netflix-453b9.appspot.com',
  messagingSenderId: '799137175620',
  appId: '1:799137175620:web:39c25097b59b04d62ac411'
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app)
