import { SwitchLeftSharp } from "@mui/icons-material";
import { Toast } from "components/toast/Toast";
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signOut, signInWithEmailAndPassword } from "firebase/auth";
import { getFirestore, doc, setDoc, getDoc } from "firebase/firestore";
import { app } from "firebaseConfig";

const db = getFirestore(app);
const auth = getAuth(app);

const isValidEmail = email => {
  const regex =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  return regex.test(email) ? true : false;
};

const isValidPassword = pwd => {
  const regex = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
  return regex.test(pwd) ? true : false;
};

onAuthStateChanged(auth, user => {
  if (user) {
    const uid = user.uid;
  } else {
    //set user login state 
  }
});

const createUser = (newUser, dispatch, login,navigate) => {
  const { email, password } = newUser;
  createUserWithEmailAndPassword(auth, email, password)
    .then(userCredential => {
      const user = userCredential.user;
      const { accessToken, uid } = user;
      localStorage.setItem("accessToken", accessToken);
      dispatch(login(uid));
      createUserProfile(newUser,uid);
      navigate("/home");
      Toast({message: "Signup successful.",type: "success"});
    })
    .catch(error => {
      const errorCode = error.code;
      switch(errorCode){
        case "auth/weak-password" : return Toast({
                message: "Password should have more than 6 characters.",
                type: "error",
            });
        case "auth/email-already-in-use":return Toast({
                message: "This email is already in use.",
                type: "error",
            });
        default : return  Toast({
                message: "Some error occured, please try again later.",
                type: "warning",
            });
      }
    });
};

const createUserProfile = async (user,uid) => {
  await setDoc(doc(db, "user_profile", uid), {
    firstname: user.firstname,
    lastname: user.lastname,
    email: user.email,
    bio: "",
    website: "",
    followers: [],
    following: [],
    avatar: "",
    coverImg: "",
  });
};

const loginUser = (user, dispatch, login, navigate) => {
  const { email, password } = user;
  signInWithEmailAndPassword(auth, email, password)
    .then(userCredential => {
      const user = userCredential.user;
      const { accessToken, uid } = user;
      localStorage.setItem("accessToken", accessToken);
      dispatch(login(uid));
      navigate("/home");
      Toast({ message: "Login successful.", type: "success" });
    })
    .catch(error => {
      const errorCode = error.code;
      console.log(errorCode);
      switch(errorCode){
        case "auth/wrong-password" : return Toast({
           message: "Invalid credentails.",
           type: "error",
         });
        case "auth/invalid-email":return Toast({
                message: "Invalid email id.",
                type: "error",
            });
        default : return  Toast({
                message: "Some error occured, please try again later.",
                type: "warning",
            });
      }
    });
};

const logoutUser = (dispatch,logout,navigate) =>{
    signOut(auth)
      .then(() => {
        dispatch(logout());
        localStorage.removeItem("accessToken");
        navigate("/auth")
        Toast({
          message: "Logout successful.",
          type: "success",
        });
      })
      .catch(error => {
         Toast({
           message: "Some error occured.",
           type: "warning",
         });
      });
}

const getLoggedInUserData = async (uid,dispatch, setUserProfile) => {
  const db = getFirestore(app);
  const docRef = doc(db, "user_profile", uid);
  const docSnap = await getDoc(docRef);
  if (docSnap.exists()) {
    console.log("Document data:", docSnap.data());
    dispatch(setUserProfile(docSnap.data()))
  } else {
    console.log("No such document!");
  }
};

export { createUser, loginUser, logoutUser, getLoggedInUserData,isValidEmail,isValidPassword };