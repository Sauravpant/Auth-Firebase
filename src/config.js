
import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider,signInWithPopup,signInWithEmailAndPassword } from "firebase/auth";

const firebaseConfig = {
  //API and other config IDs here
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();


//Sign-in using Google
const handleGoogleLogin  = async (setError) => {
   try{
      const response = await signInWithPopup(auth, googleProvider);
      console.log('Google Sign-In:', response.user);
      setError("User Logged in");
   }
   catch(err) {
       setError("Error logging in!!")
   }
}


//Authentication for customized email and password
const handleEmailLogin= async (e,emailRef,passRef,setError) => {
  try {
    e.preventDefault();
    const email=emailRef.current.value;
    const password=passRef.current.value;
    passRef.current.value="";
    emailRef.current.value=""
      const response = await signInWithEmailAndPassword(auth,email,password);
    setError("User Logged in");
  } catch (err) {
    console.log("User not found");
    setError("User not found");
    
  }
}
export {auth,googleProvider,handleGoogleLogin,handleEmailLogin};

