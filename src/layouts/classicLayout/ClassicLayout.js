import React from 'react';
import { Link } from 'react-router-dom';
import Button from './../../components/Button/Button';
import Sound from './../../components/Sound/Sound';

import './ClassicLayout.css';

function ClassicLayout({ children }) {
  return (
    <div className='app'>
      <h2 className='title'> Le confinement dont vous êtes le héros</h2>

      {children}
      <Sound></Sound>
      <div className='footer'>
        <Button to='/'>Revenir à l'accueil</Button>

        <a
          href='https://www.instagram.com/marinebaousson/'
          target='_blank'
          rel='noopener noreferrer'
        >
          <p>lien vers l'insta de Marine Bouasson</p>
        </a>
      </div>
    </div>
  );
}

export default ClassicLayout;
