import React from 'react';
import { Link } from 'react-router-dom';

import './Credits.css';

function Credits() {
  return (
    <div className='creditsWrapper'>
      <p>Le confinement dont vous êtes le héros !</p>
      <div className='creditsContent'>
        <p>
          Imaginé et écrit par{' '}
          <a href='https://www.instagram.com/marinebaousson/'>
            Marine Baousson
          </a>
        </p>
        <p>
          Développé par{' '}
          <a href='https://www.linkedin.com/in/elisa-hery-425a58108'>
            Elisa Hery{' '}
          </a>{' '}
          et Kevin Mercier
        </p>
        <p>
          Mis en musique par Romain Baousson <br />{' '}
          <span>
            (bon et en vrai il a aussi écrit le passage sur Die Hard, personne
            n'est dupe, Marine ne les a jamais vus)
          </span>
        </p>
        <p>
          Graphisme par{' '}
          <a href='https://www.instagram.com/julietteponey_illustrations/?hl=fr'>
            Juliette Poney{' '}
          </a>{' '}
        </p>

        <Link to='/'> Revenir à l'accueil</Link>
      </div>
    </div>
  );
}

export default Credits;
