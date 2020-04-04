import React from 'react';
import './Button.css';

function Button({ answer, setNextQuestion }) {
  if (!answer) return null;
  console.log(answer);

  return (
    <div className='questionLink'>
      {answer.extLink ? (
        <a
          href={'http://' + answer.extLink}
          target='_blank'
          rel='noopener noreferrer'
        >
          <button className='button'>{answer.text}</button>
        </a>
      ) : (
        <button
          className='button'
          onClick={() => setNextQuestion(answer.nextQuestion)}
        >
          {answer.text}
        </button>
      )}
    </div>
  );
}

export default Button;
