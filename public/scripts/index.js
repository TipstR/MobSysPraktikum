import {login, register, logout, sendMessage} from "../firebaseMethods.js";

// When Document is loaded:
document.addEventListener("DOMContentLoaded", () => {
    // Login
    document.getElementById("loginBtn").onclick = async () => {
        const email = document.getElementById("email").value;
        const pass = document.getElementById("pass").value;

        await login(email, pass);
    };

// Logout
    document.getElementById("logoutBtn").onclick = async () => {
        await logout();
    };

// Register
    document.getElementById("registerBtn").onclick = async () => {
        const email = document.getElementById("email").value;
        const pass = document.getElementById("pass").value;

        await register(email, pass);
    };

// Send Message
    document.getElementById("sendBtn").onclick = async () => {
        const msg = document.getElementById("msg").value;

        await sendMessage(msg);
    };
});


// Test function for testing the tests :)
export function helloWorld() {
    return 'Hello World!';
}

// This line is new
