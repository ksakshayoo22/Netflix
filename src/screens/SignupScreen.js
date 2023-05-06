import React, { useRef } from "react";
import "./SignupScreen.css";

import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBM2TB77tHspIITyyIz1_3vSFoNDJ86uE4",

  authDomain: "netflix-cloned-pr.firebaseapp.com",
  projectId: "netflix-cloned-pr",
  storageBucket: "netflix-cloned-pr.appspot.com",
  messagingSenderId: "545399712479",
  appId: "1:545399712479:web:1f854bbb8587527e5c576a",
  measurementId: "G-VBB24L4NCQ",
};

initializeApp(firebaseConfig);

function SignupScreen() {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const register = (e) => {
    e.preventDefault();

    createUserWithEmailAndPassword(
      getAuth(),
      emailRef.current.value,
      passwordRef.current.value
    )
      .then((authUser) => {
        console.log(authUser);
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  const signIn = (e) => {
    e.preventDefault();

    signInWithEmailAndPassword(
      getAuth(),
      emailRef.current.value,
      passwordRef.current.value
    )
      .then((authUser) => {
        console.log(authUser);
      })
      .catch((error) => alert(error.message));
  };

  return (
    <div className="signupScreen">
      <form>
        <h1>Sign In</h1>
        <input ref={emailRef} placeholder="Email" type="email" />
        <input ref={passwordRef} placeholder="Password" type="password" />
        <button type="submit" onClick={signIn}>
          Sign In
        </button>
        <h4>
          <span className="signupScreen__gray">New to Netflix? </span>{" "}
          <span className="signupScreen__link" onClick={register}>
            Sign Up Now
          </span>
        </h4>
      </form>
    </div>
  );
}

export default SignupScreen;
