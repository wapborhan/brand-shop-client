import { createContext, useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import auth from "../firebase/FirebaseInit";

export const AuthContex = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState();

  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const AuthInfo = { createUser };
  return <AuthContex.Provider value={AuthInfo}>{children}</AuthContex.Provider>;
};

export default AuthProvider;
