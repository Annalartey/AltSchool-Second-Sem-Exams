import React from 'react'
import Header from './Header'
import { useRef, useState, useEffect } from 'react';
import "../App.css"
import { Link, useLocation, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import {auth} from '../firebase'
import useAuth from "../hooks/useAuth";
import { faCheck, faTimes, faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;



function SignUp() {

    let location = useLocation();
  let navigate = useNavigate();

  const userRef = useRef();
    const errRef = useRef();

  const [error, setError] = useState("");
  
  const [email, setEmail] = useState("");
   const [emailFocus, setEmailFocus] = useState(false);
  
    const [password, setPassword] = useState('');
    const [validPassword, setValidPassword] = useState(false);
    const [pwdFocus, setPasswordFocus] = useState(false);

    const [matchPassword, setMatchPassword] = useState('');
    const [validMatch, setValidMatch] = useState(false);
    const [matchFocus, setMatchFocus] = useState(false);

    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false)
  const { handleAuthRegister } = useAuth();


useEffect(() => {
        userRef.current.focus();
    }, [])

  useEffect(() => {
        setValidPassword(PWD_REGEX.test(password));
        setValidMatch(password === matchPassword);
    }, [password, matchPassword])

    useEffect(() => {
        setErrMsg('');
    }, [email, password, matchPassword])

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log( email , password )

    try {
      let res = await handleAuthRegister(email, password);
      navigate("/dashboard", {
        state: {
          email,
        },
      });
      setEmail("");
      setPassword("");
    } catch (e) {
      // console.log(res?.error);
      // alert(res?.error);
    }

  };
  

  return (
    <div>
      <Header />
      <form className='form' onSubmit={handleSubmit} >
        <h1>SignUp</h1>
        <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
        <label htmlFor="username">
                            Email:
                            <FontAwesomeIcon icon={faCheck} className={email ? "valid" : "hide"} />
                            <FontAwesomeIcon icon={faTimes} className={email || !email ? "hide" : "invalid"} />
                        </label>
         <input
                            type="email"
                            id="email"
                            ref={userRef}
                            autoComplete="off"
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}
                            required
                            aria-invalid={email ? "false" : "true"}
                            aria-describedby="uidnote"
                            onFocus={() => setEmailFocus(true)}
                            onBlur={() => setEmailFocus(false)}
                        />

        <p id="uidnote" className={emailFocus && !email ? "instructions" : "offscreen"}>
                            <FontAwesomeIcon icon={faInfoCircle} />
                        Please put in a valid email
                        </p>

        
         <label htmlFor="password">
                            Password:
                            <FontAwesomeIcon icon={faCheck} className={validPassword ? "valid" : "hide"} />
                            <FontAwesomeIcon icon={faTimes} className={validPassword || !password ? "hide" : "invalid"} />
                        </label>
                        <input
                            type="password"
                            id="password"
                            onChange={(e) => setPassword(e.target.value)}
                            value={password}
                            required
                            aria-invalid={validPassword ? "false" : "true"}
                            aria-describedby="pwdnote"
                            onFocus={() => setPasswordFocus(true)}
                            onBlur={() => setPasswordFocus(false)}
                        />
                        <p id="pwdnote" className={pwdFocus && !validPassword ? "instructions" : "offscreen"}>
                            <FontAwesomeIcon icon={faInfoCircle} />
                            8 to 24 characters.<br />
                            Must include uppercase and lowercase letters, a number and a special character.<br />
                            Allowed special characters: <span aria-label="exclamation mark">!</span> <span aria-label="at symbol">@</span> <span aria-label="hashtag">#</span> <span aria-label="dollar sign">$</span> <span aria-label="percent">%</span>
                        </p>


        
        <label htmlFor="confirm_pwd">
                            Confirm Password:
                            <FontAwesomeIcon icon={faCheck} className={validMatch && matchPassword ? "valid" : "hide"} />
                            <FontAwesomeIcon icon={faTimes} className={validMatch || !matchPassword ? "hide" : "invalid"} />
                        </label>
                        <input
                            type="password"
                            id="confirm_pwd"
                            onChange={(e) => setMatchPassword(e.target.value)}
                            value={matchPassword}
                            required
                            aria-invalid={validMatch ? "false" : "true"}
                            aria-describedby="confirmnote"
                            onFocus={() => setMatchFocus(true)}
                            onBlur={() => setMatchFocus(false)}
                        />
                        <p id="confirmnote" className={matchFocus && !validMatch ? "instructions" : "offscreen"}>
                            <FontAwesomeIcon icon={faInfoCircle} />
                            Must match the first password input field.
                        </p>


        <button disabled={!email || !validPassword || !validMatch ? true : false}>Sign Up</button>
        
    </form>
      <Link to="/login"> Already have an account? login</Link>
    </div>
    
  )
};

export default SignUp



