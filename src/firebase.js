import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyCzO95escmGio7-qWJTGENYp657-cTH1BI",
    authDomain: "slacks-fit.firebaseapp.com",
    projectId: "slacks-fit",
    storageBucket: "slacks-fit.appspot.com",
    messagingSenderId: "89188007048",
    appId: "1:89188007048:web:ca129f1a400725fcc6b33d",
    measurementId: "G-JNY781XP9M"
};


const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db , auth };