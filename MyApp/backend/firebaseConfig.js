// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDvgPTBMtF3xos-htAGz0-r04_zDw3717U",
  authDomain: "set-list-9b854.firebaseapp.com",
  projectId: "set-list-9b854",
  storageBucket: "set-list-9b854.firebasestorage.app",
  messagingSenderId: "442801727999",
  appId: "1:442801727999:web:d1675b9f4fc45234bf1fca",
  measurementId: "G-0TKET8J44F"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
const analytics = getAnalytics(app);
export default db;