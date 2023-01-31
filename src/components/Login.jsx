import React from 'react'
import Header from './Header'
import { useState, useEffect } from 'react';
import "../App.css"
import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";


// import { signInWithEmailAndPassword } from "firebase/auth";
// import {auth} from '../firebase'

// import { faCheck, faTimes, faInfoCircle } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";





function Login() {
  let location = useLocation();
  let success = location.state?.success;

  const [error, setError] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { handleAuthLogin } = useAuth();



  let navigate = useNavigate();


  useEffect(() => {
    if (success) {
      alert('success')
      navigate("/login", { state: undefined });
    }
  }, []);

  const [loading, setLoading] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    //   signInWithEmailAndPassword(auth, email, password)
    // .then((userCredential) => {
    //   // Signed in 
    //   const user = userCredential.user;
    //     console.log(user)
    //     console.log(user.email)
    //     console.log(user.uid)
    //     localStorage.setItem(user.uid, user);
    //     navigate("/dashboard");
    //     setEmail("");
    //     setPassword("");
    // })
    // .catch((error) => {
    //   setError(true);
    // });
 
    try {
      let res = await handleAuthLogin(email, password);
     
      navigate("/dashboard", {
        state: {
          email,
        },
      });
      setEmail("");
      setPassword("");
    } catch (e) {
      console.log(res?.error);
      alert(res?.error);
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
          <label>Email:</label>
          <input
            type='email'
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          <label>Password:</label>
          <input
            type='password'
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </div>

        <button>{loading? "Loading..." : "Login"}</button>
        {error && <p> Wrong email or password </p>}
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















