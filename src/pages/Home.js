import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className='app'>
      <p>Le confinement dont vous êtes le héros !</p>
      <Link className='App-link' to='/start'>
        Commencer
      </Link>
    </div>
  );
}

export default Home;
