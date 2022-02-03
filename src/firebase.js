import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

const app = firebase.initializeApp({
    apiKey: "AIzaSyAKhrm65nS-sfFHrFz-POp8enAmpbVD668",
    authDomain: "auth-development-46c8b.firebaseapp.com",
    projectId: "auth-development-46c8b",
    storageBucket: "auth-development-46c8b.appspot.com",
    messagingSenderId: "178433149634",
    appId: "1:178433149634:web:bb30eae2f8621178a0495b"
})

export const auth = app.auth()
export default app