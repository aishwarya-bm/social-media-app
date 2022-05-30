import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDxON_6EsJlKUi5wX--JAiHV9i7G7WcDCI",
  authDomain: "social-media-bed61.firebaseapp.com",
  projectId: "social-media-bed61",
  storageBucket: "social-media-bed61.appspot.com",
  messagingSenderId: "284533140623",
  appId: "1:284533140623:web:a84f35dc8127a0a78254fa",
  measurementId: "G-KY22Y65TGP",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export {app, db, auth};

