import React from 'react'
import Header from "./Header"
import { Link, Outlet } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import {
  ArrowLeftOnRectangleIcon,
  FolderIcon,
  HomeIcon,
  VideoCameraIcon,
  UsersIcon,
} from '@heroicons/react/24/outline'


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

  let projects = [
    {
      title: "Calculator",
      info: "A simple calculator made with vanilla JS, HTML/CSS",
      link: "https://a-calculator-for-you.netlify.app/",
      
    },
    {
      title: "Task Tracker",
      info: "An app that helps you track your tasks for the day.",
      link: "https://trasker.netlify.app/",
     
    },
    {
      title: "Stopwatch",
      info: "A simple stopwatch built with vanilla JS, HTML/CSS",
      link: "https://a-stopwatch.netlify.app/",
   
    },
  ]

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
                  <div className='flex mt-10'>
                    <HomeIcon className='text-white w-6 h-6'/>
                    <Link to="/dashboard"><p>Dashboard</p></Link>
                  </div>
                  <div className='flex mt-10'>
                    <FolderIcon className='text-white w-6 h-6'/>
                    <Link to='/dashboard/lesson'><p>Lessons</p></Link>
                  </div>
                  <div className='flex mt-10'>
                    <VideoCameraIcon className='text-white w-6 h-6'/>
                    <Link to='/dashboard/videos'><p>Videos</p></Link>
                  </div>
                  <div className='flex mt-10'>
                    <UsersIcon className='text-white w-6 h-6'/>
                    <Link to='/dashboard'><p>Account</p></Link>
                  </div>
                  <div className='flex mt-10'>
                    <ArrowLeftOnRectangleIcon className='text-white w-6 h-6'/>
                    <Link to='/dashboard'><p onClick={handleLogout}>Logout</p></Link>
                  </div>
                </div>
                <div className='body'>
                 <h1>Hello {user?.displayName}</h1>
                  <div className="dashBody lg:mx-10 flex flex-col md:flex-col flex-wrap">
          {projects.map((project, projectIndex) => {
            return (
              <a
                key={projectIndex}
                className="w-full md:w-1/2 lg:w-1/3 text-center md:text-left py-6"
                href={project.link || ""}
                target="__blank"
                rel="noreferrer"
              >
                <div className="rounded shadow-lg w-80 pb-8 bg-white mx-auto md:mr-auto md:ml-o md:mx-0 ">
                <div
                  className="bg-center bg-cover shadow-sm w-80 h-72 mx-auto md:mr-auto md:ml-o md:mx-0 "
                ></div>

                <div className="text-center">
                  <h1 className="font-bold text-xl mt-4 mb-4 text-gray-900">
                    {project.title}
                  </h1>
                  <p className="text-xl text-gray-900">
                    {project.info}
                  </p>
                </div>
                </div>
              </a>
            );
          })}
        </div>
                  </div>
                  <Outlet/>
                </div>
                :
           <div className='w-60'>
                <h1 className="text-center text-green-500 text-4xl font-semibold tracking-tight sm:text-4xl md:text-3xl lg:text-3xl xl:text-4xl">Please Login to access dashboard</h1>
             <Link to ="/login" className="btn flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 mx-40 text-base font-medium text-white shadow-sm hover:bg-indigo-700">Login</Link>
             </div>
            }
           
          </div>
    </>
  )
}

export default Dashboard