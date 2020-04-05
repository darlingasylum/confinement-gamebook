import React from 'react';
import Question from '../../components/Question/Question';
import questions from '../../res/questions.json';

function Start() {
  return <Question question={questions.q1}></Question>;
}

export default Start;
