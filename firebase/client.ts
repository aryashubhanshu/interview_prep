import { getApp, getApps, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBSsjiBVlr1VOIFY88tekTNYP9OQUetcjs",
  authDomain: "interview-prep-c77e8.firebaseapp.com",
  projectId: "interview-prep-c77e8",
  storageBucket: "interview-prep-c77e8.firebasestorage.app",
  messagingSenderId: "885296473238",
  appId: "1:885296473238:web:a8c4ad6734f4d793050eb7",
  measurementId: "G-P7BNM1WEDN",
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);
