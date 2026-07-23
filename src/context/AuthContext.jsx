import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import SplashScreen from "../components/SplashScreen/SplashScreen";

import {
  onAuthStateChanged,
  signOut,
} from "firebase/auth";

import { auth } from "../services/firebase";

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(
      auth,
      (user) => {
        setCurrentUser(user);
        setLoading(false);
      }
    );

    return unsubscribe;
  }, []);

  const logout = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.log(error.message);
    }
  };

  const value = {
    currentUser,
    logout,
  };

 return (
  <AuthContext.Provider value={value}>
    {loading ? <SplashScreen /> : children}
  </AuthContext.Provider>
);
};

export default AuthProvider;