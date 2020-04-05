import React, { useState } from 'react';
import StupidMusic from './../../assets/music/music.mp3';

import './Sound.css';

function Sound() {
  const [sound, setSound] = useState(true);

  function toggleSound() {
    sound &&
      alert(
        "QUOI ?? Tu ne veux pas écouter cette douce musique créée spécialement et avec amour par Romain Baousson ? C'est dommage, mais on t'en veut pas"
      );
    setSound(!sound);
  }

  return (
    <div className='soundWrapper' onClick={toggleSound}>
      {sound ? (
        <i className='fas fa-volume-up'></i>
      ) : (
        <i className='fas fa-volume-mute'></i>
      )}
      <div>
        <audio src={StupidMusic} autoPlay muted={!sound} />
      </div>
    </div>
  );
}

export default Sound;
