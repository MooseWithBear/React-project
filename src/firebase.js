//! 참고문서 https://firebase.google.com/docs/auth/web/google-signin?authuser=0
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCIR7VH5vrX7vJe9HJ4lZqEQfd4LuWoY6Y",
  authDomain: "react-disney-plus-app-e54bc.firebaseapp.com",
  projectId: "react-disney-plus-app-e54bc",
  storageBucket: "react-disney-plus-app-e54bc.appspot.com",
  messagingSenderId: "199904841970",
  appId: "1:199904841970:web:1b49e175a319c64eda406b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;