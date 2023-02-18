// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import {
  getFirestore,
  collection,
  getDocs,
  addDoc,
  query,
  where,
  doc,
  deleteDoc,
  onSnapshot,
  updateDoc,
  setDoc,
} from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD8ZJFOUqdpLEHG5IYnTw_SRgd_P5HTHJ0",
  authDomain: "trazstore-170fa.firebaseapp.com",
  projectId: "trazstore-170fa",
  storageBucket: "trazstore-170fa.appspot.com",
  messagingSenderId: "982417167727",
  appId: "1:982417167727:web:df687f03737ab009abc49a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export {
  app,
  auth,
  db,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  collection,
  getDocs,
  addDoc,
  query,
  where,
  doc,
  deleteDoc,
  onSnapshot,
  updateDoc,
  setDoc,
};
