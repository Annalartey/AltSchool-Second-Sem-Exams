import React, { createContext, useState } from "react";
import { getAuth } from "firebase/auth";
import { signInWithEmailAndPassword } from "firebase/auth";
import { createUserWithEmailAndPassword } from "firebase/auth";
// import {auth} from '../firebase'

export const Context = createContext();

const UserAuthContext = ({ children }) => {
  const [user, setUser] = useState(null);
  const auth = getAuth();
  // const user = auth.currentUser;



  const refreshUser = () => {
    const lsUser = localStorage.getItem("user")
    if (lsUser) {
      setUser(JSON.parse(lsUser))
    }
  }

  const handleAuthLogin = async (email, password) => {
    return signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        localStorage.setItem("user", JSON.stringify(user));
        refreshUser()
        navigate("/dashboard");
        setEmail("");
        setPassword("");
      })
      .catch((error) => {
        "email or password incorrect."
      });
  };

  const handleAuthRegister = (email, password) => {

  return createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    localStorage.setItem("user", JSON.stringify(user));
    console.log(user)
     refreshUser()
        navigate("/dashboard");
        setEmail("");
        setPassword("");
  })
  .catch((error) => {
    "error occured"
  });
  };

  const handleAuthLogout = () => {
    localStorage.removeItem("user");
    setUser(null)
    return true
  };

  return (
    <Context.Provider
      value={{
        user,
        handleAuthLogin,
        handleAuthRegister,
        handleAuthLogout,
        refreshUser,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default UserAuthContext;