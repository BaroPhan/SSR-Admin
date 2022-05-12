// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB1-GO2yIMyC6QNj5f8r4ir9pCpHGSI54U",
    authDomain: "ssr-admin.firebaseapp.com",
    projectId: "ssr-admin",
    storageBucket: "ssr-admin.appspot.com",
    messagingSenderId: "1055522173593",
    appId: "1:1055522173593:web:1322d936862f3a55487e08"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app