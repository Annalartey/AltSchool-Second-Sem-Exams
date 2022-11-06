import React from 'react'
import Header from './Header'
import { useState } from 'react';
import "../App.css"

function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = async (e) => {
  e.preventDefault();

  console.log(email, password)
  }

return (
  <div>
    <Header />
    <form onSubmit={handleSubmit} className='form'>
      <h1 className="sm:text-5xl md:text-4xl lg:text-4xl xl:text-4xl text-center block text-gray-900 xl:inline">Login</h1>
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

      <button>Login</button>
  </form>
  </div>
  
)
}

export default Login