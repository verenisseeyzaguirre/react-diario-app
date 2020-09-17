import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyCi--C7aAoxtwxF64xp5lhoE_NHscBtLIA",
    authDomain: "react-app-cursos-82999.firebaseapp.com",
    databaseURL: "https://react-app-cursos-82999.firebaseio.com",
    projectId: "react-app-cursos-82999",
    storageBucket: "react-app-cursos-82999.appspot.com",
    messagingSenderId: "798845669229",
    appId: "1:798845669229:web:9fa272e1324de089819464"
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();


export {
    db,
    googleAuthProvider,
    firebase
}