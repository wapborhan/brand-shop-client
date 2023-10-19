import { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import auth from "../firebase/FirebaseInit";

export const AuthContex = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState();
  const googleProvider = new GoogleAuthProvider();

  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const createUserByGoogle = () => {
    return signInWithPopup(auth, googleProvider);
  };

  const loginUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      // setLoading(false);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const logout = () => {
    return signOut(auth);
  };

  const AuthInfo = { createUser, createUserByGoogle, loginUser, logout, user };
  return <AuthContex.Provider value={AuthInfo}>{children}</AuthContex.Provider>;
};

export default AuthProvider;
