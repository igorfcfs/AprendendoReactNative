// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAHCUFDuiI2Crcm3eGdRoiHAFoJQHxrWY0",
  authDomain: "lista-de-linguagens-41c1b.firebaseapp.com",
  projectId: "lista-de-linguagens-41c1b",
  storageBucket: "lista-de-linguagens-41c1b.firebasestorage.app",
  messagingSenderId: "441001836505",
  appId: "1:441001836505:web:97dd95c439c912917be3c8",
  measurementId: "G-Z27N84QBN7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;