import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyCsSg3TlO2jFnoCh4ridkMXAwq4BTun8vY",
  authDomain: "invoice-c9d3d.firebaseapp.com",
  projectId: "invoice-c9d3d",
  storageBucket: "invoice-c9d3d.appspot.com",
  messagingSenderId: "185944038744",
  appId: "1:185944038744:web:017c717d05d855ba1f192d",
  measurementId: "G-88SLG7MQF9",
};

const app = firebase.initializeApp(firebaseConfig);

export const auth = app.auth()
export const db = getFirestore(app); 
export default app;
