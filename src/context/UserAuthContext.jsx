import React, { createContext, useState } from "react";

export const Context = createContext();
const UserAuthContext = ({ children }) => {
  const [user, setUser] = useState(null);

  const refreshUser = () => {
    const lsUser = localStorage.getItem("user")
    if (lsUser) {
      setUser(JSON.parse(lsUser))
    }
  }

  const handleAuthLogin = (username, password) => {
    let sysPass = 'password'
    let sysUsername = 'admin'
    if (password === sysPass && username === sysUsername) {
      const matchingUser = {
        firstName: 'Anna',
        lastName: 'Lartey'
      }
      setUser(matchingUser)
      localStorage.setItem("user", JSON.stringify(matchingUser));
      return { success: "successful" };
    } else if (password !== "" && username !== ""){
      console.log(password)
      console.log(username)
      const matchingUser = {
        firstName: username,
        lastName: password
      }
      setUser(matchingUser)
      localStorage.setItem("user", JSON.stringify(matchingUser));
      return { success: "successful" };
    }else if (password ===""  && username ===""){
      return { error: "Please your username and password is empty" };
    } 
    else {
      return { error: "Wrong username or password, please try again" };
    }
  };

  const handleAuthRegister = (username, password) => {
    localStorage.setItem(username, JSON.stringify(password));
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