// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyANvI1VlY_jnbttU149Ul2ME9kFye-oTco",
  authDomain: "aaaa-1c586.firebaseapp.com",
  projectId: "aaaa-1c586",
  storageBucket: "aaaa-1c586.appspot.com",
  messagingSenderId: "334735454148",
  appId: "1:334735454148:web:e1868a94278d1ef981be91",
  measurementId: "G-J3WDKCQ09E"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);