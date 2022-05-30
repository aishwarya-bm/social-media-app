import { createAsyncThunk } from "@reduxjs/toolkit";
import { Toast } from "components/toast/Toast";
import {
  addDoc,
  arrayUnion,
  collection,
  deleteDoc,
  doc,
  getDocs,
  orderBy,
  query,
  setDoc,
  updateDoc,
} from "firebase/firestore";
import { db } from "firebaseConfig";

const createPost = async (post, setPostForm, handleClose, dispatch, getUserFeedPosts) => {
  try {
    await addDoc(collection(db, "posts"), post);
    setPostForm({ content: "", author: {}, comments: [], media: "", createdAt: "" });
    handleClose();
    dispatch(getUserFeedPosts());
    Toast({ message: "Created post successfully.", type: "success" });
  } catch (err) {
    Toast({ message: "Some error occured, please try again later.", type: "error" });
  }
};

const updatePost = async (post, setPostForm, handleClose, dispatch, getUserFeedPosts) => {
  try {
    await setDoc(doc(db, "posts", post.postId), post);
    setPostForm({ content: "", author: {}, comments: [], media: "", createdAt: "" });
    handleClose();
    dispatch(getUserFeedPosts());
    Toast({ message: "Updated post successfully.", type: "success" });
  } catch (err) {
    Toast({ message: "Some error occured, please try again later.", type: "error" });
  }
};

const deletePost = async (postId, dispatch, getUserFeedPosts) => {
  try {
    await deleteDoc(doc(db, "posts", postId));
    dispatch(getUserFeedPosts());
    Toast({ message: "Deleted post successfully.", type: "success" });
  } catch (err) {
    Toast({ message: "Some error occured, please try again later.", type: "error" });
  }
};

const getUserFeedPosts = createAsyncThunk("feedPosts/getUserFeedPosts", async () => {
  let posts = [];
  const q = query(collection(db, "posts"), orderBy("createdAt", "desc"));
  const querySnapshot = await getDocs(q);
  querySnapshot.forEach(doc => {
    const currDoc = doc.data();
    posts = [...posts, { ...currDoc, postId: doc.id }];
  });
  return posts;
});

const addCommentToPost = async (postId, authorId, author, comment, setComment, dispatch, getUserFeedPosts) => {
  const { firstname, lastname, avatar } = author;
  comment = {
    ...comment,
    author: { firstname, lastname, avatar, id: authorId },
    createdAt: new Date(),
    postId: postId,
  };
  const postRef = doc(db, "posts", postId);
  try{
  await updateDoc(postRef, {
    comments: arrayUnion(comment),
  });
  setComment({ author: {}, comment: "", createdAt: null, postId: null });
  dispatch(getUserFeedPosts());
  }
  catch(err){
    Toast({ message: "Some error occured, please try again later.", type: "error" });
  }
  
};

export { addCommentToPost, createPost, deletePost, getUserFeedPosts, updatePost };
