// src/firebase.ts
import { initializeApp } from "firebase/app";
import { getAnalytics, isSupported } from "firebase/analytics";

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCJbqe7C0DpWUua-ufzZ-x-kyWNC5SL5CM",
  authDomain: "portfolio-c0f17.firebaseapp.com",
  projectId: "portfolio-c0f17",
  storageBucket: "portfolio-c0f17.firebaseapp.com", // fixed typo
  messagingSenderId: "232940140891",
  appId: "1:232940140891:web:bb6d4c701b9dd951fe827e",
  measurementId: "G-M0F3T1E530",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Analytics only if supported (avoids SSR or older browsers error)
isSupported().then((yes) => {
  if (yes) getAnalytics(app);
});

export default app;
