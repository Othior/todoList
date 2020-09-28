import firebase from "firebase";
import "firebase/firebase-firestore"

let firebaseConfig = {
    apiKey: "AIzaSyCo1FthVwutquFEfGcBVz9AXZJg6RPOnCQ",
    authDomain: "pensebete-8c56e.firebaseapp.com",
    databaseURL: "https://pensebete-8c56e.firebaseio.com",
    projectId: "pensebete-8c56e",
    storageBucket: "pensebete-8c56e.appspot.com",
    messagingSenderId: "451218610201",
    appId: "1:451218610201:web:83f504419d43d138eab288"
  };
  // Initialize Firebase
  const fire = firebase.initializeApp(firebaseConfig);
  const db = fire.firestore();

  export {db,fire}