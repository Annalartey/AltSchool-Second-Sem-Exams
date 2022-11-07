import React, { useState } from "react";
import useAuth from "../hooks/useAuth";
import { Link } from "react-router-dom";
import Header from "./Header"

function SignUp() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const { handleAuthRegister } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match");
    } else {
      await handleAuthRegister(username, password);
    }
  };

  return (
    <div>
      <Header />
      <form className='form' >
        <h1>SignUp</h1>
        <label>Username:</label>
        <input 
        type='text'
        onChange={(e) => setUsername(e.target.value)}
        value={username}
        />
        <label>Password:</label>
        <input 
        type='password'
        onChange={(e) => setPassword(e.target.value)}
        value={password}
        />
        <label>Confirm Password:</label>
        <input 
        type='password'
        onChange={(e) => setConfirmPassword(e.target.value)}
        value={confirmPassword}
        />


        <button onClick={handleSubmit}>SignUp</button>
    </form>
      <Link to="/login"> Already have an account? login</Link>
    </div>
    
  )
}

export default SignUp