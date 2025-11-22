// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword }
    from "https://www.gstatic.com/firebasejs/11.1.0/firebase-auth.js";
import { getFirestore, collection, addDoc, onSnapshot }
    from "https://www.gstatic.com/firebasejs/11.1.0/firebase-firestore.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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
const auth = getAuth(app);
const db = getFirestore(app);

document.getElementById("loginBtn").onclick = async () => {
    const email = document.getElementById("email").value;
    const pass = document.getElementById("pass").value;

    try {
        await signInWithEmailAndPassword(auth, email, pass);
        alert("Logged in!");
    } catch (err) {
        console.log(err);
        alert("Login failed: " + err.message);
    }
};

document.getElementById("registerBtn").onclick = async () => {
    const email = document.getElementById("email").value;
    const pass = document.getElementById("pass").value;

    try {
        await createUserWithEmailAndPassword(auth, email, pass);
        alert("Registered!");
    } catch (err) {
        console.log(err);
        alert("Registration failed: " + err.message);
    }
};

// ---------------- FIRESTORE -------------------

document.getElementById("sendBtn").onclick = async () => {
    const msg = document.getElementById("msg").value;

    try {
        await addDoc(collection(db, "messages"), {
            text: msg,
            timestamp: Date.now()
        });
    } catch (err) {
        console.log(err);
        alert("Error writing document: " + err.message);
    }
};

// Realtime updates from Firestore
onSnapshot(collection(db, "messages"), (snapshot) => {
    const list = document.getElementById("list");
    list.innerHTML = "";

    snapshot.forEach((doc) => {
        const data = doc.data();
        list.innerHTML += `<p>${data.text}</p>`;
    });
});