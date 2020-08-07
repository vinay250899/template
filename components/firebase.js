import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

var firebaseConfig = {
    apiKey: "AIzaSyC46kJYNrdBAwquR07kS9_uA2D6AfL8GYQ",
    authDomain: "bieterp-c3136.firebaseapp.com",
    databaseURL: "https://bieterp-c3136.firebaseio.com",
    projectId: "bieterp-c3136",
    storageBucket: "bieterp-c3136.appspot.com",
    messagingSenderId: "67034725428",
    appId: "1:67034725428:web:b9544c0e35880c5f491e61",
    measurementId: "G-XLSDVMJSN2"
  };

firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
export const firestore = firebase.firestore();