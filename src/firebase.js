// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCxPUWJVZKTh2hi8zNDzF9YUW6ZKYhZ9-Y",
  authDomain: "online-shop-a3ac9.firebaseapp.com",
  projectId: "online-shop-a3ac9",
  storageBucket: "online-shop-a3ac9.appspot.com",
  messagingSenderId: "177807330597",
  appId: "1:177807330597:web:f73ed6363597bcc2dd5ecc",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
