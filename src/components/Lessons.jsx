import React from 'react'
import {Link, Outlet} from 'react-router-dom'

function Lessons() {
 const data = [
    {grade: "One",
    star: "*",
    link:"/grade_1"
    },
    {grade: "Two",
    star: "**",
    link:""
    },
    {grade: "Three",
    star: "***",
    link:""},
    {grade: "Four",
    star: "****",
    link:""},
    {grade: "Five",
    star: "*****",
    link:""},
    {grade: "Six",
    star: "******",
    link:""},
  ]
  return (
    <div>
      <h1>Lessons</h1>
      <div className='flex flex-wrap'>
        {
          data.map((d) => {
            return(
              <Link className='comment-card' to = {d.link}>
                <p> Grade {d.grade} Lesson</p>
                <p>{d.star}</p>
              </Link>
            )
          })
        }
      </div>
    </div>

  )
}

export default Lessons