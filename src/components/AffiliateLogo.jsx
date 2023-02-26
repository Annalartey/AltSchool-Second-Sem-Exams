import React from 'react';
import image from '../images/img1.jpg'

export default function AffiliateLogo () {
  const logo = [
    {
      name: "company",
      pic: image
    },
     {
      name: "company",
      pic: "image"
    },
     {
      name: "company",
      pic: "image"
    },
     {
      name: "company",
      pic: "image"
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
              <p>{l.pic}</p>
         <p>{l.name}</p> 
            </div>
           
          )
        })
      }
    </div>
  </div>
    )
  }
