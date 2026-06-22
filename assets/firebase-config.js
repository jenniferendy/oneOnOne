// Firebase configuration
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getFirestore, collection, doc, getDocs, setDoc, deleteDoc, onSnapshot, getDoc } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyBhEOe5IFcaPGovj6dD-rRG4Cno2kdL6lU",
  authDomain: "ononone-8a470.firebaseapp.com",
  projectId: "ononone-8a470",
  storageBucket: "ononone-8a470.firebasestorage.app",
  messagingSenderId: "828979924566",
  appId: "1:828979924566:web:d83d67c57c7f5ed39a35f7"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db, collection, doc, getDocs, setDoc, deleteDoc, onSnapshot, getDoc };
