require('dotenv').config();


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: process.env.API_KEY,
    authDomain: "mob-sys-praktikum.firebaseapp.com",
    projectId: "mob-sys-praktikum",
    storageBucket: "mob-sys-praktikum.firebasestorage.app",
    messagingSenderId: "775769873350",
    appId: "1:775769873350:web:540b1288fd204d1554b0c7",
    measurementId: "G-9G15V4YGTX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);