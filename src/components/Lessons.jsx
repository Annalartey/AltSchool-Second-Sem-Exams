import React from 'react'
import {Link, Outlet} from 'react-router-dom'

function Lessons() {
  data = [
    {grade: "One",
    star: "*",
    link:""},
    {grade: "Two",
    star: "**",
    link:""},
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
      <div className="lessons-nav">
        <Link to = '/dashboard/lesson/grade_1'>grade 1</Link>
        <Link to = '/dashboard/lesson/grade_1'>grade 2</Link>
        <Link to = '/dashboard/lesson/grade_1'>grade 3</Link>
      </div>

      <div>
        {
          data.map((d) => {
            return(
              <Link to = {d.link}>
                <p> Grade {d.grade} Lesson</p>
                <p>{d.star}</p>
              </Link>
            )
          })
        }
      </div>
        
        <Outlet/>
    </div>

  )
}

export default Lessons