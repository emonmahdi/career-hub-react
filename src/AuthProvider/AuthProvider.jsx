/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */

import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { createContext, useContext, useEffect, useState } from "react";
import auth from "../Firebase/firebase.config";

export const AuthContext = createContext();

const register = (email, password) => {
  return createUserWithEmailAndPassword(auth, email, password);
};

const login = (email, password) => {
  return signInWithEmailAndPassword(auth, email, password);
};

const logout = () => signOut(auth);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setIsLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setIsLoading(false);
    });

    return () => unsubscribe();
  }, []);

  return (
    <AuthContext.Provider value={{ user, register, login, logout }}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;

// Custom hook to use AuthContext
export function useAuth() {
  return useContext(AuthContext);
}
