import { createAsyncThunk } from "@reduxjs/toolkit";
import { Toast } from "components/toast/Toast";
import { addDoc, collection, doc, getDocs, query, where } from "firebase/firestore";
import { db } from "firebaseConfig";

const createPost = async (post, setPostForm, handleClose) => {
  try {
    await addDoc(collection(db, "posts"), post);
    setPostForm({ content: "", author: {}, comments: [], media: "", createdAt:"" });
    handleClose();
    Toast({ message: "Created post successfully.", type: "success" });
  } catch (err) {
    Toast({ message: "Some error occured, please try again later.", type: "error" });
  }
};

const getUserFeedPosts = createAsyncThunk("feedPosts/getUserFeedPosts", async () => {
  let posts = [];
  const q = query(collection(db, "posts"));
  const querySnapshot = await getDocs(q);
  querySnapshot.forEach(doc => {
    const currDoc = doc.data();
    let createdAtTimestamp = new Date(currDoc.createdAt.seconds * 1000);
    let hh = createdAtTimestamp.getHours(),
      min = createdAtTimestamp.getMinutes(),
      yyyy = createdAtTimestamp.getFullYear(),
      dd = createdAtTimestamp.getDate(),
      mm = createdAtTimestamp.getMonth();
    let formatedCreatedAt = `${hh < 9 ? "0" + hh : hh}:${min < 9 ? "0" + min : min}${
      hh > Number(12) ? " PM, " : " AM, "
    }${dd}-${mm < 9 ? "0" + mm : mm}-${yyyy}`;
    posts = [...posts, { ...currDoc, postId: doc.id, createdAt: formatedCreatedAt }];
  });
  return posts;
});

export { createPost, getUserFeedPosts };
