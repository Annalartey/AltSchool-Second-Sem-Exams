import React, { useContext } from 'react'
import Header from "./Header"
import {Link, Outlet} from 'react-router-dom'
import { AuthContext } from '../contexts/AuthContext'
import {Helmet} from 'react-helmet-async'


function Dashboard() {

  const {user, setUser} = useContext(AuthContext);
  console.log(user)

  // const handleClick= () => {
  //   setUser({
  //     username: 'Anatiola'
  //   })
  // }
  
  return (
    <>
       <Helmet>
        <title>Dashboard</title>
        <meta name="description" content="Track your learning progress in your dashboard" />
         <link rel="canonical" href="/dashboard" />
      </Helmet>
     <AuthContext.Consumer>
        {(value) => (
             <div className='dashboard'>
                 <Header/>
                 {user?(
                 <div className='dashboard-body'>
                     <div className='left'>
                       <Link to = '/dashboard'><p>Dashboard</p></Link>
                       <Link to = '/dashboard/lesson'><p>Lessons</p></Link>
                       <Link to = '/dashboard/videos'><p>Videos</p></Link>
                       <Link to = '/dashboard'><p>Account</p></Link>
                       <Link to = '/dashboard'><p>Logout</p></Link>
                     </div>
                     <div className='right'>
                        <h1>Hello {value.user.username}</h1>
                        <Outlet/>
                     </div>
                </div>
                ) : (
               <div>
                  <p>"You are not logged in"</p>
                 <Link to='/login'>Login</Link>
               </div>
                   
                 )
                 };
            
           </div>
        )}
    </AuthContext.Consumer>

</>
  )
}

export default Dashboard