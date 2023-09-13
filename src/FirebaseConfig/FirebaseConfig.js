// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_PUBLIC_apiKey,
  authDomain: import.meta.env.VITE_PUBLIC_authDomain,
  projectId: import.meta.env.VITE_PUBLIC_projectId,
  storageBucket: import.meta.env.VITE_PUBLIC_storageBucket,
  messagingSenderId: import.meta.env.VITE_PUBLIC_messagingSenderId,
  appId: import.meta.env.VITE_PUBLIC_appId,
  measurementId: import.meta.env.VITE_PUBLIC_measurementId
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default app;