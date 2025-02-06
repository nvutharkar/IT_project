
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
apiKey: "AIzaSyAJfihhkSLtDJqXOf1mlpYLGCQFGs9bkD0",
authDomain: "itproject-c0b6a.firebaseapp.com",
projectId: "itproject-c0b6a",
storageBucket: "itproject-c0b6a.firebasestorage.app",
messagingSenderId: "217090104035",
appId: "1:217090104035:web:09c6392661f4c443e043d6",
measurementId: "G-FF9S3HQ82Q"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);