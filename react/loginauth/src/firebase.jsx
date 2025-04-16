import { initializeApp } from "firebase/app";
import { getfirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBEmrBNZ6ti866pFj1egkjDSDAayMthv-w",
    authDomain: "data-auth-cc30c.firebaseapp.com",
    projectId: "data-auth-cc30c",
    storageBucket: "data-auth-cc30c.firebasestorage.app",
    messagingSenderId: "614721117583",
    appId: "1:614721117583:web:fc4208bafcc8573cdffffa",
    measurementId: "G-NSJF2X0JZR"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth()
export const db = getfirestore(app);


