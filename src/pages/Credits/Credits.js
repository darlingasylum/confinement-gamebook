import React from 'react';
import { Link } from 'react-router-dom';

import ClassicLink from './../../components/ClassicLink/ClassicLink';
import fullLogo from './../../assets/full_logo.png';

import './Credits.css';

function Credits() {
  return (
    <div className='creditsWrapper'>
      <img className='creditsLogo' src={fullLogo}></img>
      <div className='creditsContent'>
        <p>
          Imaginé et écrit par{' '}
          <a href='https://www.instagram.com/marinebaousson/' target='_blank'>
            Marine Baousson
          </a>
        </p>
        <p>
          Développé par <b>Elisa Hery </b> et <b>Kevin Mercier</b>
        </p>
        <p>
          Mis en musique par <b>Romain Baousson</b> <br />{' '}
          <span>
            (bon et en vrai il a aussi écrit le passage sur Die Hard, personne
            n'est dupe, Marine ne les a jamais vus)
          </span>
        </p>
        <p>
          Graphisme et illustrations par{' '}
          <a
            href='https://www.instagram.com/julietteponey_illustrations/?hl=fr'
            target='_blank'
          >
            Juliette Poney{' '}
          </a>{' '}
        </p>
        <p>
          {' '}
          <br></br>
          <p> Merci à vous, ainsi qu'à :</p> Mathilde
          <a
            href='https://66.media.tumblr.com/b71a640dbed1b6be8cc86676b309f04f/tumblr_o4m7fxnf6Z1uupfn8o1_1280.gif'
            target='_blank'
          >
            ,
          </a>{' '}
          Fanny, Olivia, Léa, Tic, Lucie, Félix, Kami, Julie, Marina
          <a
            href='https://twitter.com/DickKingSmith/status/1247755564685250572?s=07'
            target='_blank'
          >
            ,
          </a>{' '}
          SML{' '}
        </p>
      </div>
      <ClassicLink text="Revenir à l'accueil" to='/' />
    </div>
  );
}

export default Credits;
