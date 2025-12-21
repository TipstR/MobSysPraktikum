import {auth, db} from "./app.js";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { collection, addDoc, onSnapshot } from "firebase/firestore";

export async function login(email, pass) {
    try {
        await signInWithEmailAndPassword(auth, email, pass);
        alert("Logged in!");
    } catch (err) {
        console.log(err);
        alert("Login failed: " + err.message);
    }
}


export async function logout() {
    try {
        signOut(auth);

        alert("Logged Out!");
    } catch (err) {
        console.log(err);
        alert("Logout failed!");
    }
}


export async function register(email, pass) {
    try {
        await createUserWithEmailAndPassword(auth, email, pass);
        alert("Registered!");
    } catch (err) {
        console.log(err);
        alert("Registration failed: " + err.message);
    }
}


export async function sendMessage(msg) {
    try {
        await addDoc(collection(db, "messages"), {
            text: msg,
            timestamp: Date.now()
        });
    } catch (err) {
        console.log(err);
        alert("Error writing document: " + err.message);
    }
}


// if (document.getElementById("list") !== null) {
//     onSnapshot(collection(db, "messages"), (snapshot) => {
//         const list = document.getElementById("list");
//         list.innerHTML = "";
//
//         snapshot.forEach((doc) => {
//             const data = doc.data();
//             list.innerHTML += `<p>${data.text}</p>`;
//         });
//     });
// }
