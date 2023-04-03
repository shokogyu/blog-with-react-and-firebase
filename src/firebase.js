// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDVduz0WFwZpsH-t8OM-rm6EFdeV1ElY34",
  authDomain: "blog-react-udemy.firebaseapp.com",
  projectId: "blog-react-udemy",
  storageBucket: "blog-react-udemy.appspot.com",
  messagingSenderId: "763859969035",
  appId: "1:763859969035:web:e55fe5276d31c9c7dc530e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);

export { auth, provider, db };