import React from 'react'
import {Link, Outlet} from 'react-router-dom'

function Lessons() {
  return (
    <div>
        <h1>Lessons</h1>
      <div className="lessons-nav">
        <Link to = '/dashboard/lesson/grade_1'>grade 1</Link>
        <Link to = '/dashboard/lesson/grade_1'>grade 2</Link>
        <Link to = '/dashboard/lesson/grade_1'>grade 3</Link>
      </div>
        
        <Outlet/>
    </div>

  )
}

export default Lessons