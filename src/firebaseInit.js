// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCFlp7uu2sDPuBy6cIwpzFh5LQ6NDz-b_M",
  authDomain: "moments-photography-8829a.firebaseapp.com",
  projectId: "moments-photography-8829a",
  storageBucket: "moments-photography-8829a.appspot.com",
  messagingSenderId: "240607672433",
  appId: "1:240607672433:web:1efd9178844fb6ad9b83d0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth()
export default auth;