import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyBRsrQNh2IznVX9Bncai48YlvIPMAWYYWs",
  authDomain: "bibliduim.firebaseapp.com",
  projectId: "bibliduim",
  storageBucket: "bibliduim.appspot.com",
  messagingSenderId: "650199738583",
  appId: "1:650199738583:web:5a149e30bdad4b9c816892"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);