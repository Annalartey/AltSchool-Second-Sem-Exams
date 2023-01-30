import React from 'react'

function GradeOneLesson() {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submitted")
  }
  function updateLocalStorage(){
    localStorage.setItem("score", JSON.stringify(score))
}

const num1 = Math.ceil(Math.random()*10)
const num2 = Math.ceil(Math.random()*10)
let score = JSON.parse(localStorage.getItem("score"));
if (!score){
    score = 0;
}
  return (
    <div>
      <h1>GradeOneLesson</h1>
      <p>what is {num1} + {num2} ?</p>
      <input type="text" value="input" />
      <button onClick={handleSubmit}>Submit</button>
      <p>{score}</p>
    </div>
  )
}

export default GradeOneLesson