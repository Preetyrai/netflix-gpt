import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB7dCyJkAqMkUtRPU9MMUPlxZFTijFsPBw",
  authDomain: "netflixgpt-63edb.firebaseapp.com",
  projectId: "netflixgpt-63edb",
  storageBucket: "netflixgpt-63edb.appspot.com",
  messagingSenderId: "196277223596",
  appId: "1:196277223596:web:a96a74d9beea72500fdf09",
  measurementId: "G-BVSEVRSMT7",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
