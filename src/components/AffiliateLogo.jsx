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
  <div>
    hello affiliate schools
    <div>
      {
        logo.map((l) => {
          return(
            <div>
               l.name
            </div>
           
          )
        })
      }
    </div>
  </div>
    )
  }
