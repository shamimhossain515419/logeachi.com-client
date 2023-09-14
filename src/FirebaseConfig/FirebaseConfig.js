
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAtL-MbrChO_yjNdCY_MsPQ0zXRLKoOwV4",
  authDomain: "logeachi-55109.firebaseapp.com",
  projectId: "logeachi-55109",
  storageBucket: "logeachi-55109.appspot.com",
  messagingSenderId: "867833581690",
  appId: "1:867833581690:web:cd950750cde5e96cdd2bc3",
  measurementId: "G-DG811VT1RT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default app;

