import React from 'react';
import Question from '../../../components/Question/Question';

function Celine() {
  const answers = [{ to: '/confine', text: 'Rentre chez toi' }];

  return (
    <Question
      question="You're a Queen. On t'aime Céline !!! Mais tu es quand même confinée."
      answers={answers}
    ></Question>
  );
}

export default Celine;
