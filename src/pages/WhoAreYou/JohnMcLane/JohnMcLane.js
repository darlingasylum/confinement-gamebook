import React from 'react';
import Question from '../../../components/Question/Question';

function JohnMcLane() {
  const answers = [
    { to: '/confine', text: 'Je mets mes chausettes et je me confine' },
  ];

  return (
    <Question
      question='Exceptionnellement, mets des chaussettes, tu verras, ça peut servir.'
      answers={answers}
    ></Question>
  );
}

export default JohnMcLane;
