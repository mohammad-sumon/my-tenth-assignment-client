// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCo-y4cXmXYeRdEc8k0zKIAttUE4S3kM08",
  authDomain: "expert-programmer-client.firebaseapp.com",
  projectId: "expert-programmer-client",
  storageBucket: "expert-programmer-client.appspot.com",
  messagingSenderId: "496935028096",
  appId: "1:496935028096:web:e4b6e25411c22d6424ad65"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;