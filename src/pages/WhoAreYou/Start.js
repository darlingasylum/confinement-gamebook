import React from 'react';
import { Link } from 'react-router-dom';
import Question from '../../components/Question/Question';

function Start() {
  const answers = [
    { to: '/celine', text: 'Vous êtes Céline Dion' },
    {
      to: '/politique',
      text:
        "Vous etes Emmanuel Macron, Edouard Philippe, ou n'importe quelle personne membre du gouvernement",
    },
    {
      to: '/soignant',
      text:
        'Vous faites partie du personnel soignant, ou des personnes qui assurent le fonctionnement de la France',
    },
    { to: '/john', text: 'Vous êtes John Mc Lane' },
    { to: '/polanskiki', text: 'Vous êtes Roman Polanski' },
    {
      to: '/confine',
      text: ' vous etes un être ordinaire, confiné.e chez vous ',
    },
  ];

  return (
    <Question
      question='Oh non il y a le corona virus !'
      answers={answers}
    ></Question>
  );
}

export default Start;
