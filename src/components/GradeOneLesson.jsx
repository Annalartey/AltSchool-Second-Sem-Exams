import React from 'react'

function GradeOneLesson() {
 let questions = [
    {
      id: 1,
      que: "what is 1 + 1",
      ans: 2,
    },
    {
      id: 2,
      que: "what is 2 + 1",
      ans: 3,
    },
  {
      id: 3,
      que: "what is 3 + 1",
      ans: 4,
    },
  {
      id: 4,
      que: "what is 4 + 1",
      ans: 5,
    }
  ]
  return (
    <div>
      <h1>GradeOneLesson</h1>
      <div>
        {questions.map((q) => (
      <div>
        <p>{q.id}</p>
        <p>{q.que}</p>
      </div>
          
          
      
    )
      )},
      </div>
      <p>Question</p>
      <p>Answers</p>
    </div>
  )
}

export default GradeOneLesson