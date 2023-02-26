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
    <h1>hello affiliate schools</h1>
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
