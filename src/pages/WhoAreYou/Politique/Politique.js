import React from 'react';
import Question from '../../../components/Question/Question';

function Politique() {
  const answers = [{ to: '/', text: 'Oké' }];

  return (
    <Question
      question='LOL ! vas plutôt bosser sur la revalorisation du système de santé plutôt que de faire des tests sur internet'
      answers={answers}
    ></Question>
  );
}

export default Politique;
