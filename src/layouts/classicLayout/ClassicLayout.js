import React from 'react';
import { Link } from 'react-router-dom';
import Sound from './../../components/Sound/Sound';

import './ClassicLayout.css';

function ClassicLayout({ children }) {
  return (
    <div className='app'>
      <h2 className='title'> Le confinement dont vous êtes le héros</h2>

      {children}

      <Sound></Sound>
      <div className='footer'>
        <Link to='/' className='questionLink'>
          Revenir à l'accueil
        </Link>

        <a
          href='https://www.instagram.com/marinebaousson/'
          target='_blank'
          rel='noopener noreferrer'
        >
          lien vers l'insta de Marine Baousson
        </a>
      </div>
    </div>
  );
}

export default ClassicLayout;
