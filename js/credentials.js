// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCSzHKWMjJXVLen3XduyVeIFmKSQGSLSYc",
  authDomain: "talavera-fe.firebaseapp.com",
  projectId: "talavera-fe",
  storageBucket: "talavera-fe.appspot.com",
  messagingSenderId: "398539581712",
  appId: "1:398539581712:web:e2afc2f917ccf7554cdd95",
  measurementId: "G-BMWCSD028P"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);