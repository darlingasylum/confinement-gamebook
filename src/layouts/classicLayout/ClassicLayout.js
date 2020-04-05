import React from 'react';
import { Link } from 'react-router-dom';
import Sound from './../../components/Sound/Sound';

import './ClassicLayout.css';

function ClassicLayout({ children }) {
  return (
    <div className='app'>
      <div className='content-wrap'>
        <h2 className='title'> Le confinement dont vous êtes le héros</h2>

        {children}

        <Sound></Sound>
        <div className='navigate'>
          <Link to='/' className='questionLink'>
            Revenir à l'accueil
          </Link>
        </div>
        <div className='footer'>
          <a
            href='https://www.instagram.com/marinebaousson/'
            target='_blank'
            rel='noopener noreferrer'
            className='instaLink'
          >
            Créé par Marine Baousson
          </a>
        </div>
      </div>
    </div>
  );
}

export default ClassicLayout;
