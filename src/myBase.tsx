// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCAB46EjIvzgx1iebG9DfucXDjLwNNU4PI",
    authDomain: "eduo-d27a1.firebaseapp.com",
    projectId: "eduo-d27a1",
    storageBucket: "eduo-d27a1.appspot.com",
    messagingSenderId: "882949329483",
    appId: "1:882949329483:web:58a37e665cdc2c7050b3ce",
    measurementId: "G-8RHPRBMGV5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);