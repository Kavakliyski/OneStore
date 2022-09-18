// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_KEY,
    authDomain: "onestore-8e27a.firebaseapp.com",
    databaseURL: "https://onestore-8e27a-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "onestore-8e27a",
    storageBucket: "onestore-8e27a.appspot.com",
    messagingSenderId: "507404305871",
    appId: "1:507404305871:web:6c4b122ed29212b0b5beba",
    measurementId: "G-KE8BPVH0FQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);