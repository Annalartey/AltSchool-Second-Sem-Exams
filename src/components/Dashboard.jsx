import React, {useState} from 'react'
import Header from "./Header"
import {Link, Outlet} from 'react-router-dom'


function Dashboard() {
  
  return (
     <div className='dashboard'>
       <Header />
       <div className='dashboard-body'>
         <div className='left'>
           <Link to = '/dashboard'><p>Dashboard</p></Link>
           <Link to = '/dashboard/lesson'><p>Lessons</p></Link>
           <Link to = '/dashboard/videos'><p>Videos</p></Link>
           <Link to = '/dashboard'><p>Account</p></Link>
           <Link to = '/dashboard'><p>Logout</p></Link>
         </div>
         <div className='right'>
            <h1>Hi Anna</h1>
            <Outlet/>
         </div>
        
       </div>
        
    </div>
  )
}

export default Dashboard