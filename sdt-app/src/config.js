import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from "firebase/auth";
const firebaseConfig = {
    apiKey: "AIzaSyADZysXCSTjqL687W8tWo-uW4CLipjGA1U",
    authDomain: "sdt-almau.firebaseapp.com",
    projectId: "sdt-almau",
    storageBucket: "sdt-almau.appspot.com",
    messagingSenderId: "264551579906",
    appId: "1:264551579906:web:2c808a6be3706a5758021b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const provider = new GoogleAuthProvider();
export {auth,provider};