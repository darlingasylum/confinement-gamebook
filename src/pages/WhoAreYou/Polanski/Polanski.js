import React from 'react';
import Question from '../../../components/Question/Question';

function Polanski() {
  const answers = [{ to: '/confine', text: 'Je la ferme et je me confine' }];

  return (
    <Question
      question="Rassure toi, tu ne risques rien : le coronavirus, c'est pas Adèle Haenel ou Florence Foresti, il n'osera jamais s'opposer à toi"
      answers={answers}
    ></Question>
  );
}

export default Polanski;
