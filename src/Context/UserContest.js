import React, { useEffect } from "react";
import { createContext } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import app from "./../Firebase/firebase.init";
import { useState } from "react";
export const AuthContext = createContext();
const auth = getAuth(app);
const UserContest = ({ children }) => {
  const [user, setuser] = useState({});
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setuser(currentUser);
    });
    return () => {
      unsubscribe();
    };
  }, []);
  const createuserwithemailpassword = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const loginuserwithemailpassword = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  const userlogout = () => {
    return signOut(auth);
  };

  const authinfo = {
    user,
    createuserwithemailpassword,
    loginuserwithemailpassword,
    userlogout,
  };
  return (
    <AuthContext.Provider value={authinfo}>{children}</AuthContext.Provider>
  );
};

export default UserContest;
