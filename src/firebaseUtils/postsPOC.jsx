// ====================================
//TODO: This file will be deleted later
// ====================================

import { collection, doc, setDoc, getFirestore, getDoc } from "firebase/firestore";
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
// try {
//   setPostForm({ ...post, userId: doc(db, "user_profile", uid) });
//   await addDoc(collection(db, "posts"), post);
//   setPostForm({ content: "", userId: null });
//   handleClose();
//   Toast({ message: "Created post successfully.", type: "success" });
// }
// try {
//   setPostForm({ ...post, userId: doc(db, "user_profile", uid) });
//   const newpost = await addDoc(collection(db, "posts"), post);
//   console.log(newpost)
//   const userRef = await addDoc(collection(db, "posts", newpost.id, "author"), user);
//   console.log(userRef)
//   setPostForm({ content: "", userId: null });
//   handleClose();
//   Toast({ message: "Created post successfully.", type: "success" });
// }
