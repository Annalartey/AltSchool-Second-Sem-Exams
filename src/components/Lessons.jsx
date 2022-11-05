import React from 'react'
import {Link, Outlet} from 'react-router-dom'

function Lessons() {
  return (
    <div>
        <h1>Lessons</h1>
        <Link to = '/dashboard/lesson/grade_1'>grade 1</Link>
        <Outlet/>
    </div>

  )
}

export default Lessons