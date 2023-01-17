import {Helmet} from 'react-helmet-async'
import React from 'react'
import{Link} from 'react-router-dom'
import logo from "../images/logo1.svg"

function ErrorPage() {
  return (
    <>
      <Helmet>
        <title>Error 404 (missing link)</title>
        <meta name="description" content="The page you are looking for does not exist or is broken" />
      </Helmet>
    <div className="text-center flex items-center justify-center h-screen mt-40">
        <img
          className="h-20 w-auto sm:h-10"
          src={logo}
          alt="learn logo"
        />
      <div>
      <p className="text-3xl"> 404. <span className="text-gray-300">That's an error</span></p>
        <p>Sorry, page not found. The URL you are looking for is not here</p>
        <p>We have a beautifully designed <Link className="text-gray-800" to= '/'>Home Page</Link> where you can hang arround for the main time.</p>
        </div>
    </div>
    </>
  )
}

export default ErrorPage