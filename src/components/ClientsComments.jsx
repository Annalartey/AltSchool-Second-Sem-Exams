import React from 'react';


export default function ClientComments () {
  const data = [
    {
      name: "Anna",
      image: "imgurl",
      comment: "i haven't seen any learning app as simple as Learn",
    },
    {
      name: "Blessing",
      image: "imgurl",
      comment: "i haven't seen any learning app as simple as Learn",
    },
    {
      name: "David",
      image: "imgurl",
      comment: "i haven't seen any learning app as simple as Learn",
    },
    
    {
      name: "Vicky",
      image: "imgurl",
      comment: "i haven't seen any learning app as simple as Learn",
    },
    {
      name: "Sharron Wehns",
      image: "imgurl",
      comment: "i haven't seen any learning app as simple as Learn",
    },
  ]
  return (
    <>
      <div> 
    <h1> What clients say about us </h1>
    <div>
      {
        data.map((d)=>{
          return (
<p> {d.name}</p>
            )
          }
)
      }
    </div>
  </div>
    </>
    )
}

