// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAe2VWhN3H0bIrW4dIP4e9RD8Ktf4KYHZ8",
  authDomain: "yugioh-app-b3b35.firebaseapp.com",
  projectId: "yugioh-app-b3b35",
  storageBucket: "yugioh-app-b3b35.firebasestorage.app",
  messagingSenderId: "235510014409",
  appId: "1:235510014409:web:1ac7e5c234d0fd9ba98818",
  measurementId: "G-YZS71K76Y0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);