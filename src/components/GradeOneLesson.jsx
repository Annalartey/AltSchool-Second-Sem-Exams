import React, { useState, useEffect } from "react";
import Quiz from './Quiz'

function GradeOneLesson() {
  
  const [input, setInput] = useState("");
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [score, setScore] = useState(0);

  function updateLocalStorage() {
    localStorage.setItem("score", JSON.stringify(score));
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submitted", input, ans);
    {
      if (input == ans) {
        console.log("correct"),
        setScore(score + 1)
      } else {
        console.log("try again"),
        setScore(score - 1)
      }
    }
    updateLocalStorage(),
    setInput("")
    console.log(score)
  };

  

  function mathCalc() {
    setNum1(Math.ceil(Math.random() * 5)),
    setNum2(Math.ceil(Math.random() * 5));
  }

  useEffect(() => {
    mathCalc();
  }, []);

  const ans = num1 + num2;

  let userScore = JSON.parse(localStorage.getItem("score"));
  if (!score) {
    userScore = 0;
  }
  return (
    <div>
      <h1 className="g-1-lesson-head">GradeOneLesson</h1>
      <div className="g-1-lesson-1">
        <p className="g-1-question">
          what is {num1} + {num2} ?
        </p>
        <input
          type="number"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="g-1-lesson-input"
        />

        <button onClick={handleSubmit}>Submit</button>
        <button onClick={mathCalc}>Next</button>
        <p className="score"> Score: {userScore}</p>
        <Quiz/>
      </div>
    </div>
  );
}

export default GradeOneLesson;
