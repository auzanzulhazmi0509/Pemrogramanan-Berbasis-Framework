import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAj0wV8dIm3_N0r5cXoUB57WRfubBryhPc",
    authDomain: "modul11-9798f.firebaseapp.com",
    projectId: "modul11-9798f",
    storageBucket: "modul11-9798f.appspot.com",
    messagingSenderId: "346567646862",
    appId: "1:346567646862:web:311452cb98484d0e38b3df",
    measurementId: "G-SKNJK4YD5M"

};

export const myFirebase = firebase.initializeApp(firebaseConfig);
const baseDb = myFirebase.firestore();
export const db = baseDb;