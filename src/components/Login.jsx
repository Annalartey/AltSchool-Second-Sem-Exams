import React from 'react'
import Header from './Header'
import { useState, useEffect } from 'react';
import "../App.css"
import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

function Login() {
  let location = useLocation();
  let success = location.state?.success;
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { handleAuthLogin } = useAuth();
  let navigate = useNavigate();

  useEffect(() => {
    if (success) {
      alert('success')
      navigate("/login", { state: undefined });
    }
  }, []);
  const handleSubmit = async (e) => {
    e.preventDefault();
    let res = await handleAuthLogin(username, password);
    if (res.success) {
      navigate("/dashboard", {
        state: {
          username,
        },
      });
      setUsername("");
      setPassword("");
    } else {
      console.log(res.error);
      alert(res.error);
    }
  };

return (
  <div>
    <Header />
    <form 
      onSubmit={(e) => handleSubmit(e)} 
    className='form'>
      <h1 className="sm:text-3xl md:text-4xl lg:text-4xl xl:text-4xl text-center block text-gray-900 xl:inline">Login</h1>
      <div>
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
    </div>

      <button>Login</button>
  </form>
    <Link
              className="inline-block"
              to="/signup"
            >
              Dont have an account yet? Signup
            </Link>
  </div>
  
)
}

export default Login