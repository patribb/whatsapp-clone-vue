import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBD5LKuoVhTUkxR7puCn9ILuw6cNE9y5zU",
  authDomain: "whatsapp-clone-50ac5.firebaseapp.com",
  projectId: "whatsapp-clone-50ac5",
  storageBucket: "whatsapp-clone-50ac5.appspot.com",
  messagingSenderId: "753679112057",
  appId: "1:753679112057:web:1b627801618c38a56141a8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {db}