import React from 'react';
import Question from '../../../components/Question/Question';

function Confine() {
  const answers = [
    { to: '/confine', text: 'Vous restez chez vous' },
    {
      to: '/confine',
      text: "Vous vous rendez dans votre résidence secondaire sur l'Ile de Ré",
    },
    {
      to: '/confine',
      text:
        "Rien à foutre ! vous sortez de chez vous comme si de rien n'était ",
    },
  ];

  return (
    <Question
      question='Vous etes confiné.e ! que faites vous ? '
      answers={answers}
    ></Question>
  );
}

export default Confine;
