
import { initializeApp } from "firebase/app";
import { getFirebase } from "firebase/Firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCNOZDsLNy7uymExtpm04i7kVT1YMgS7AU",
    authDomain: "todo-app-d1c73.firebaseapp.com",
    projectId: "todo-app-d1c73",
    storageBucket: "todo-app-d1c73.firebasestorage.app",
    messagingSenderId: "653349036508",
    appId: "1:653349036508:web:ebeed44b62784a1e7e6f19",
    measurementId: "G-9QSFL80VJ0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirebase(app);