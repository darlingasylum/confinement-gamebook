import React from 'react';
import './Button.css';

function Button({ answer, setNextQuestion }) {
  if (!answer) return null;

  return (
    <div className='questionLink'>
      <button
        className='button'
        onClick={() => setNextQuestion(answer.nextQuestion)}
      >
        {answer.text}
      </button>
    </div>
  );
}

export default Button;
