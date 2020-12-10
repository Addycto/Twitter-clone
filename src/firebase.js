import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyA6Q8RXhd2u3py_dwqGlnwwZ5ostV1fGj8",
    authDomain: "twitter-clone-addy.firebaseapp.com",
    projectId: "twitter-clone-addy",
    storageBucket: "twitter-clone-addy.appspot.com",
    messagingSenderId: "251810477724",
    appId: "1:251810477724:web:21ac628ba1f3b4e1931f59",
    measurementId: "G-K24PN24942"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();

  export default db;