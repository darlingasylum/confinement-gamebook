import React from 'react';
import { Link } from 'react-router-dom';
import './Button.css';

function Button({ children, to }) {
  return (
    <Link to={to} className='questionLink'>
      <button className='button'>{children}</button>
    </Link>
  );
}

export default Button;
