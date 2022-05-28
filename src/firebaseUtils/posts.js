import { Toast } from "components/toast/Toast";
import { addDoc, collection, doc, getDocs, query, where } from "firebase/firestore";
import { db } from "firebaseConfig";

const createPost = async (post, setPostForm, handleClose) => {
  try {
    await addDoc(collection(db, "posts"), post);
    setPostForm({ content: "", author: {}, comments: [], image:"" });
    handleClose();
    Toast({ message: "Created post successfully.", type: "success" });
  } catch (err) {
    Toast({ message: "Some error occured, please try again later.", type: "error" });
  }
};

const getUserFeedPosts = async () => {
  // const q = query(collection(db, "posts"), where("userId", "==", "/user_profile/bbP6gbDOM9Ors3AM0Or4P4fx7XI2"));
  const q = query(collection(db, "posts"));
  const querySnapshot = await getDocs(q);
  querySnapshot.forEach(doc => {
    // doc.data() is never undefined for query doc snapshots
    console.log(doc.id, " => ", doc.data());
    // const uq = query(collection(db,"user_profile"), where("uid", "==", "bbP6gbDOM9Ors3AM0Or4P4fx7XI2"));
  });
};

export { createPost, getUserFeedPosts };
