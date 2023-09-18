import React, { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.config";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";

export const AuthContext = createContext();
const auth = getAuth(app);

const Authprovider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setloading] = useState(true);
  const googleProvider = new GoogleAuthProvider();

  const googleCreatUSer = () => {
    return signInWithPopup(auth, googleProvider);
  };
  const CreatUSerEmail = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const SignInUSer = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  const signOutUSer = () => {
    return signOut(auth);
  };
  const updateUser = (name, url) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: url,
    });
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUSer) => {
      setUser(currentUSer);
      setloading(false);
    });
    return () => {
      return unsubscribe;
    };
  }, []);

  const resors = {
    googleCreatUSer,
    CreatUSerEmail,
    user,
    SignInUSer,
    signOutUSer,
    updateUser,
    loading,
  };
  return <AuthContext.Provider value={resors}>{children}</AuthContext.Provider>;
};

export default Authprovider;
