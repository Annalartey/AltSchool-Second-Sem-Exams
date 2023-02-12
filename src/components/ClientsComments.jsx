import React from 'react';
import {Link} from "react-router-dom"
import image1 from "../images/img1.jpg"


export default function ClientComments () {
  const data = [
    {
      name: "Anna",
      image: image1,
      prof: "Teacher",
      comment: "i haven't seen any learning app as simple as Learn",
    },
    {
      name: "Blessing",
      image: image1,
      prof: "Parent",
      comment: "i haven't seen any learning app as simple as Learn",
    },
    {
      name: "David",
      image: image1,
      prof: "Proprietor",
      comment: "i haven't seen any learning app as simple as Learn",
    },
    
    {
      name: "Vicky",
      image: image1,
      prof: "parent",
      comment: "i haven't seen any learning app as simple as Learn",
    },
  ]
  return (
    <>
      <div className = "comment-space"> 
         <h1> What clients say about us </h1>
          <div className="comment-div">
           {
            data.map((d)=>{
              return (
            <div className = "comment-card">
                  <img className="comment-img" src={d.image} alt="picture"/>
                  <p className ="comment-name"> {d.name}</p>
                  <p> - {d.prof} -</p>
              <p> "{d.comment}" </p>

                </div>
            )
          }
)
      }
    </div>
       <Link to="./signup" > <button>Join The Winning Team</button> </Link>
  </div>
    </>
    )
}

