import React from 'react';
import './Button.css';

function Button({ answer, setNextQuestion }) {
  if (!answer) return null;

  return (
    <div className={`questionLink ${answer.withSpace ? 'withSpace' : ''}`}>
      {answer.externalLink ? (
        <a
          href={'http://' + answer.externalLink}
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
