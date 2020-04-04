import React, { useState } from "react";
import Button from "./../../components/Button/Button";
import answers from "../../res/answers.json";

import questions from "../../res/questions.json";

import "./Question.css";

function Question({ question }) {
  const [questionState, setQuestionState] = useState(question);

  var answerList = [];
  questionState.next.forEach((id) => {
    answerList.push(answers[id]);
  });

  var updateQuestion = (someArg) => {
    setQuestionState(questions[someArg]);
  };

  return (
    <div className="section">
      <h1 className="question">{questionState.text}</h1>
      <div className="answers">
        {answerList.map((answer) => {
          return (
            <Button answer={answer} updateQuestion={updateQuestion}></Button>
          );
        })}
      </div>
    </div>
  );
}

export default Question;
