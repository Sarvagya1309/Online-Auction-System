import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/storage';
import 'firebase/firestore';

// Use your own configs!
const app = firebase.initializeApp({
  apiKey: "AIzaSyB0I-oc17LMzNF981wEGRlirgXCzAXemqM",
  authDomain: "grounded-web-334412.firebaseapp.com",
  databaseURL: "https://grounded-web-334412-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "grounded-web-334412",
  storageBucket: "grounded-web-334412.appspot.com",
  messagingSenderId: "1080826233399",
  appId: "1:1080826233399:web:72a70d1cf47a161877f5b2",
  measurementId: "G-62PR9FF6XF"
});

export const timestamp = firebase.firestore.FieldValue.serverTimestamp;
export const firestoreApp = app.firestore();
export const storageApp = app.storage();
export const authApp = app.auth();
