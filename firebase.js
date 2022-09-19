
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

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


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);