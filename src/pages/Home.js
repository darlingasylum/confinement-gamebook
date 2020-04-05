import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
  return (
    <div className='homeWrapper'>
      <p>Le confinement dont vous êtes le héros !</p>
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
