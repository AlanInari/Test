import React from 'react';
import cangrejo from '../assets/cangrejo.jpg';

const Logo = () => {
  return (
    <a>
      <img src={cangrejo} className="logo animarCangrejo react" alt="Vite logo" />
    </a>
  )
}

export default Logo