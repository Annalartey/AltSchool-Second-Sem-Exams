import React from 'react'
import Header from './Header'
import img1 from "../images/img1.jpg";
import {Helmet} from 'react-helmet-async'
import {Link} from 'react-router-dom'
import "../App.css"
import ClientsComments from './ClientsComments'
import AffiliateLogo from './AffiliateLogo'
function Home() {
  return (
    <>
      <Helmet>
        <title>Home</title>
        <meta name="description" content="Start your learning journey with us" />
      </Helmet>

      <div>
      <Header />



<main className="lg:relative">
        <div className="mx-auto w-full max-w-7xl pt-16 pb-20 text-center lg:py-48 lg:text-left">
          <div className="px-4 sm:px-8 lg:w-1/2 xl:pr-16">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl">
              <span className="block  text-gray-900 xl:inline">Welcome to learn...</span>{" "}
              <span className="home_text block text-blue-400 xl:inline">the best learning world.</span>
            </h1>
            <p className="mx-auto mt-3 max-w-md text-lg text-gray-500 sm:text-xl md:mt-5 md:max-w-3xl">
               <span>“What sculpture is to a block of marble, education is to the human soul.”</span>
              <span> -Joseph Addison</span>
            </p>
            <div className="mt-10 sm:flex sm:justify-center lg:justify-start">
              <div className="rounded-md shadow">
                <Link to="/signup"
                  className="flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 md:py-4 md:px-10 md:text-lg"
                >
                  Get started
                </Link>
              </div>
              <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
                <Link to="/dashboard"
                  className="flex w-full items-center justify-center rounded-md border border-transparent bg-white px-8 py-3 text-base font-medium text-indigo-600 hover:bg-gray-50 md:py-4 md:px-10 md:text-lg"
                >
                  Dashboard
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="relative h-64 w-full sm:h-72 md:h-96 lg:absolute lg:inset-y-0 lg:right-0 lg:h-full lg:w-1/2">
          <img
            className="absolute inset-0 h-full w-full object-cover"
            src={img1}
            alt="children learning"
          />
        </div>

      </main>
          <ClientsComments/>
<AffiliateLogo/>
    </div>

    </>
  )
}

export default Home