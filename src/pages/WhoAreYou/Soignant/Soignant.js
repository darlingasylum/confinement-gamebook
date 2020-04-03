import React from 'react';
import Question from '../../../components/Question/Question';

function Soignant() {
  const answers = [{ to: '/', text: 'Je suis un héros de la France' }];

  return (
    <Question
      question='Vous faites partie du personnel soignant, ou des personnes qui assurent le fonctionnement de la France'
      answers={answers}
    ></Question>
  );
}

export default Soignant;
