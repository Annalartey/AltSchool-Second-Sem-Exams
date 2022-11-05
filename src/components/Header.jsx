import React from 'react'
import {Link} from 'react-router-dom'

function Header() {
  return (
    <div className='App-header'>
      <div className='logo'>Learn</div>
      <nav>
        <Link to = "/"><ul>Home</ul></Link>
        <Link to = "/dashboard"><ul>Dashboard</ul></Link>
      </nav>
      <nav>
        <Link to = "/login"><ul>Login</ul></Link>
        <Link to = "/signup"><ul>Signup</ul></Link>
      </nav>
    </div>
  )
}

export default Header