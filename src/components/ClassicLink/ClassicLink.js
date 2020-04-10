import React from 'react';
import { Link } from 'react-router-dom';

import './ClassicLink.css';

function ClassicLink({ text, to }) {
  return (
    <Link className='ClassicLink' to={to}>
      {text}
    </Link>
  );
}

export default ClassicLink;
