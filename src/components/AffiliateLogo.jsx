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
  <div className='bg-gray-100'>
    hello affiliate schools
    <div>
      {
        logo.map((l) => {
          return(
            <div>
              <p>{l.name}</p> 
            </div>
           
          )
        })
      }
    </div>
  </div>
    )
  }
