import React, { useState } from 'react';
import StupidMusic from './../../assets/music/music.mp3';

import './Sound.css';

function Sound() {
  const [sound, setSound] = useState(true);

  function toggleSound() {
    sound &&
      alert(
        'QUOI ?? Tu veux pas écouter la musique ? Vas bien te faire cuire le cul alors !'
      );
    setSound(!sound);
  }

  return (
    <div className='soundWrapper' onClick={toggleSound}>
      {sound ? (
        <i class='fas fa-volume-up'></i>
      ) : (
        <i class='fas fa-volume-mute'></i>
      )}
      <div>
        <audio src={StupidMusic} autoPlay muted={!sound} />
      </div>
    </div>
  );
}

export default Sound;
