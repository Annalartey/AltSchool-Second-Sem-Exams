import React from 'react'
import Header from "./Header"
import { Link, Outlet } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

function Dashboard() {
    const { user, handleAuthLogout } = useAuth()
  const navigate = useNavigate();
  const handleLogout = async () => {
    const res = await handleAuthLogout()
    if (!res) {
      alert("There was an error logging you out. Try again later")
      return
    }

    alert("You are logging out of learn")
    navigate('/')
  }

  return (
    <>
      <Helmet>
        <title>Dashboard</title>
        <meta name="description" content="Track your learning progress in your dashboard" />
        <link rel="canonical" href="/dashboard" />
      </Helmet>

      <div className='dashboard'>
        <Header />
         {
          user ?
              <div className='dashboard-body'>
                <div className='nav'>
                  <Link to='/dashboard'><p>Dashboard</p></Link>
                  <Link to='/dashboard/lesson'><p>Lessons</p></Link>
                  <Link to='/dashboard/videos'><p>Videos</p></Link>
                  <Link to='/dashboard'><p>Account</p></Link>
                  <Link to='/dashboard'><p onClick={handleLogout}>Logout</p></Link>
                </div>
                <div className='body'>
                 <h1>Hello {user.firstName}</h1>
                </div>
              </div>
                :
           <div className='align-center'>
                <h1 className="text-center text-gray-500 text-4xl font-semibold tracking-tight sm:text-4xl md:text-3xl lg:text-3xl xl:text-4xl">Please Login to access dashboard</h1>
             <Link to ="/login" className="text-green-400 ">Login</Link>
             </div>
            }
            <Outlet />
          </div>
    </>
  )
}

export default Dashboard