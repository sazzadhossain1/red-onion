import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyAXH8-yGwHxluudVaBo7J9Uzt4Z9HeMH6c",
  authDomain: "red-onion-2e060.firebaseapp.com",
  projectId: "red-onion-2e060",
  storageBucket: "red-onion-2e060.appspot.com",
  messagingSenderId: "625051103521",
  appId: "1:625051103521:web:9aa9c2fb4d0c586aeb4e60"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;