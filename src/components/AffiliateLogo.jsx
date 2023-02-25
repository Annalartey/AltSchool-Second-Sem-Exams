import React from 'react';

export default function AffiliateLogo () {
  const logo = [
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
     {
      name: "company",
      pic: "image"
    },
  ]
  return (
  <div className="affiliate">
    hello affiliate schools
    <div className='affiliate-con'>
      {
        logo.map((l) => {
          return(
            <div>
              <p>{l.name}</p> 
              <p>{l.pic}</p>
            </div>
           
          )
        })
      }
    </div>
  </div>
    )
  }
