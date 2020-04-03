import React from 'react';
import { Link } from 'react-router-dom';
import Button from './../../components/Button/Button';

import './Question.css';

function Question({ question, answers }) {
  return (
    <div className='section'>
      <h1 className='question'>{question}</h1>
      <div className='answers'>
        {answers.map((answer) => (
          <Button to={answer.to}>{answer.text}</Button>
        ))}
      </div>
    </div>
  );
}

export default Question;
