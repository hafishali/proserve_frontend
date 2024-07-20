// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyC3ZZKP8RE5o8Z7ITdzDAhhWUeRjzkYiKs",
  authDomain: "proserve-4222c.firebaseapp.com",
  projectId: "proserve-4222c",
  storageBucket: "proserve-4222c.appspot.com",
  messagingSenderId: "948803366208",
  appId: "1:948803366208:web:a66a68e43d3273a1459ea5",
  measurementId: "G-GD3FY3XCF1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app)
const provider=new GoogleAuthProvider()
export{auth,provider};
