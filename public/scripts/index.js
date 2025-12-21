import {auth, db} from "../app.js";
import {createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut}
    from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
import {collection, addDoc, onSnapshot}
    from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

console.log("hello world");

// Login
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

// Logout
document.getElementById("logoutBtn").onclick = async () => {
    try {
        signOut(auth);

        alert("Logged Out!");
    } catch (err) {
        console.log(err);
        alert("Logout failed!");
    }
};

// Register
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

// Send Message
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

// Read Messages
onSnapshot(collection(db, "messages"), (snapshot) => {
    const list = document.getElementById("list");
    list.innerHTML = "";

    snapshot.forEach((doc) => {
        const data = doc.data();
        list.innerHTML += `<p>${data.text}</p>`;
    });
});