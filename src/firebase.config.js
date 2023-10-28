// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getDatabase } from "firebase/database";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBk4U5aEfEtFQ3F8f_2RrPwBiPLPL05j3c",
  authDomain: "computer-store-d3f3d.firebaseapp.com",
  databaseURL:
    "https://computer-store-d3f3d-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "computer-store-d3f3d",
  storageBucket: "computer-store-d3f3d.appspot.com",
  messagingSenderId: "109633539909",
  appId: "1:109633539909:web:efcffbf9909d545aeff82c",
  measurementId: "G-7S76S50PFN",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const dbFirestore = getFirestore(app);
export const dbRealtime = getDatabase(app);
export const storage = getStorage(app);
