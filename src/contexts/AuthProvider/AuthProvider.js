import React from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import app from "../../firebase/firebase.init";
import { createContext } from "react";
import { useState } from "react";
import { useEffect } from "react";

export const AuthContext = createContext();

const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // for google sign in
  const googleSignIn = (googleProvider) => {
    return signInWithPopup(auth, googleProvider);
  };

  // for github sign in
  const githubSignIn = (githubProvider) => {
    return signInWithPopup(auth, githubProvider);
  };

  // for create user with email and password
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // sign in with email and password
  const signIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logOut = () => {
    return signOut(auth);
  };

  useEffect( () => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
      console.log('inside auth state changed', currentUser);

    })

    return () => {
      unsubscribe();
    }

  }, [])

  const authInfo = {
    user,
    setUser,
    googleSignIn,
    githubSignIn,
    createUser,
    signIn,
    logOut,
    loading
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
