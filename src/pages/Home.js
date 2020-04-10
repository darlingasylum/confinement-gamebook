import React from 'react';
import { Link } from 'react-router-dom';
import fullLogo from './../assets/full_logo.png';

import './Home.css';

function Home() {
  return (
    <div className='homeWrapper'>
      <img className='homeLogo' src={fullLogo}></img>
      <div className='actions'>
        <Link className='homeLink' to='/game'>
          Commencer
        </Link>
        <Link className='homeLink' to='/credits'>
          Crédits
        </Link>
      </div>
    </div>
  );
}

export default Home;
