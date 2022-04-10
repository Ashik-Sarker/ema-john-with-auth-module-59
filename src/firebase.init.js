
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyCkTx6l3FeDC0VO9N2I8MReD3MbFBdBK88",
    authDomain: "ema-john-simple-c23ed.firebaseapp.com",
    projectId: "ema-john-simple-c23ed",
    storageBucket: "ema-john-simple-c23ed.appspot.com",
    messagingSenderId: "338671989686",
    appId: "1:338671989686:web:f3a24ee20bbcf3e8f74717"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;