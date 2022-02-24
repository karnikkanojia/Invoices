import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: process.env.FIREBASE_APIKEY,
  authDomain: process.env.FIREBASE_AUTHDOMAIN,
  projectId: process.env.PROJECTID,
  storageBucket: process.env.STORAGEBUCKET,
  messagingSenderId: "",
  appId: process.env.APPID,
  measurementId: process.env.MEASUREMENTID,
};

const app = firebase.initializeApp(firebaseConfig);

export const auth = app.auth()
export const db = getFirestore(app); 
export default app;
