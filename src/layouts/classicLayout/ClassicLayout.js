import React from 'react';
import { Link } from 'react-router-dom';
import Sound from './../../components/Sound/Sound';

import ClassicLink from './../../components/ClassicLink/ClassicLink';
import tinyLogo from './../../assets/tiny_logo.png';

import './ClassicLayout.css';

function ClassicLayout({ children }) {
  return (
    <div className='app'>
      <div className='content-wrap'>
        <img className='pageLogo' src={tinyLogo}></img>

        {children}

        <Sound></Sound>
        <div className='navigate'>
          <ClassicLink text='Recommencer le jeu' to='/game' />
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
