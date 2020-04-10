import React from 'react';
import { Link } from 'react-router-dom';
import ClassicLink from './../components/ClassicLink/ClassicLink';

import fullLogo from './../assets/full_logo.png';

import './Home.css';

function Home() {
  return (
    <div className='homeWrapper'>
      <img className='homeLogo' src={fullLogo}></img>
      <div className='actions'>
        <ClassicLink text='Commencer' to='/game' />
        <ClassicLink text='Crédits' to='/credits' />
      </div>
    </div>
  );
}

export default Home;
