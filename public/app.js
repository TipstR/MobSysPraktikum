// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAuth}
    from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
import { getFirestore}
    from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";


// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBPsQRyv6E1MS4uOH55Oc6DZ6T0Bm1fXug",
    authDomain: "mob-sys-praktikum.firebaseapp.com",
    projectId: "mob-sys-praktikum",
    storageBucket: "mob-sys-praktikum.firebasestorage.app",
    messagingSenderId: "775769873350",
    appId: "1:775769873350:web:540b1288fd204d1554b0c7",
    measurementId: "G-9G15V4YGTX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

