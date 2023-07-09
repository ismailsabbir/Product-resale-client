import React, { useEffect } from "react";
import { createContext } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  signInWithPopup,
  sendPasswordResetEmail,
  updateProfile,
} from "firebase/auth";
import app from "./../Firebase/firebase.init";
import { useState } from "react";
import { GoogleAuthProvider } from "firebase/auth";
export const AuthContext = createContext();
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const UserContest = ({ children }) => {
  const [user, setuser] = useState({});
  const [loading, setloading] = useState(true);
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setuser(currentUser);
      setloading(false);
    });
    return () => {
      unsubscribe();
    };
  }, []);
  const createuserwithemailpassword = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const googlecreateuser = () => {
    return signInWithPopup(auth, provider);
  };
  const loginuserwithemailpassword = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  const userlogout = () => {
    return signOut(auth);
  };
  const passwprdreset = (email) => {
    return sendPasswordResetEmail(auth, email);
  };
  const updateusername = (name) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
    });
  };
  const updatephoto = (photo) => {
    return updateProfile(auth.currentUser, {
      photoURL: photo,
    });
  };
  const authinfo = {
    user,
    createuserwithemailpassword,
    googlecreateuser,
    loginuserwithemailpassword,
    userlogout,
    passwprdreset,
    updateusername,
    loading,
    updatephoto,
  };
  return (
    <AuthContext.Provider value={authinfo}>{children}</AuthContext.Provider>
  );
};

export default UserContest;
