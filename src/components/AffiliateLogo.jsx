import React from 'react';
import image1 from "../images/img1.jpg"

export default function AffiliateLogo () {
  const logo = [
    {
      name: "company",
      pic: image1,
    },
     {
      name: "company",
      pic: image1,
    },
     {
      name: "company",
      pic: image1,
    },
     {
      name: "company",
       pic: image1,
    },
  ]
  return (
  <div className="affiliate">
    <h1>Affiliate schools</h1>
    <div className='affiliate-con'>
      {
        logo.map((l) => {
          return(
            <div>
              <img className="comment-img" src={l.pic} alt="logo"/>
              <p>{l.name}</p> 
            </div>
           
          )
        })
      }
    </div>
  </div>
    )
  }
