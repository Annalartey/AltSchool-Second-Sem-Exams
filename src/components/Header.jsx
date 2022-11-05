import React from 'react'
import {Link} from 'react-router-dom'

function Header() {
  return (
    <div className='App-header'>
      <div className='logo'></div>
      <nav>
        <Link to = "/"><ul>Home</ul></Link>
        <Link to = "/about"><ul>About</ul></Link>
        <Link to = "/dashboard"><ul>Dashboard</ul></Link>
        <Link to = "/login"><ul>Login</ul></Link>
        <Link to = "/signup"><ul>Signup</ul></Link>
      </nav>
    </div>
  )
}

export default Header