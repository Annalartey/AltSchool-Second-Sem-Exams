import React from 'react';


export default function ClientComments () {
  const data = [
    {
      name: "Anna",
      image: "imgurl",
      prof: "Teacher",
      comment: "i haven't seen any learning app as simple as Learn",
    },
    {
      name: "Blessing",
      image: "imgurl",
      prof: "Parent",
      comment: "i haven't seen any learning app as simple as Learn",
    },
    {
      name: "David",
      image: "imgurl",
      prof: "Proprietor",
      comment: "i haven't seen any learning app as simple as Learn",
    },
    
    {
      name: "Vicky",
      image: "imgurl",
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
                  <p> {d.name}</p>
                  <p> {d.prof}</p>
                  <p>{d.comment} </p>

                </div>
            )
          }
)
      }
    </div>
        <button>Join The Winning Team</button>
  </div>
    </>
    )
}

