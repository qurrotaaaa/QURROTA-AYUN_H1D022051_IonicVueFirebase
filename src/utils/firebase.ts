// src/utils/firebase.ts
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyBb8zN3FLBN6gqRh4nr1O80ztVfGkgxgUQ",
    authDomain: "vue-firebase-3c264.firebaseapp.com",
    projectId: "vue-firebase-3c264",
    storageBucket: "vue-firebase-3c264.firebasestorage.app",
    messagingSenderId: "221664946336",
    appId: "1:221664946336:web:1013e14a1a7ad9472b81c5"
  };

const firebase = initializeApp(firebaseConfig);
const auth = getAuth(firebase);
const googleProvider = new GoogleAuthProvider();

export { auth, googleProvider };