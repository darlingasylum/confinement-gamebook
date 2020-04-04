import React from "react";
import "./Button.css";

function Button({ answer, updateQuestion }) {
  var updateQuestion = updateQuestion;

  return (
    <div className="questionLink">
      <button className="button" onClick={() => updateQuestion(answer.next)}>
        {answer.text}
      </button>
    </div>
  );
}

export default Button;
