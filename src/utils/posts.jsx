import {
  collection,
  doc,
  setDoc,
  getFirestore,
  getDoc,
} from "firebase/firestore";
import { app } from "firebaseConfig";
const getPosts = async () => {
  const db = getFirestore(app);
  const docRef = doc(db, "posts", "kvYYjN6C7EAXyjdT7TG3");
  const docSnap = await getDoc(docRef);
  if (docSnap.exists()) {
    console.log("Document data:", docSnap.data());
  } else {
    console.log("No such document!");
  }

  const docUserRef = doc(db, "user_profile", "qYk6XyEdQVl2MxEEYSyJ");
  const docUserSnap = await getDoc(docUserRef);
  if (docSnap.exists()) {
    console.log("Document data:", docUserSnap.data());
  } else {
    console.log("No such document!");
  }
};
