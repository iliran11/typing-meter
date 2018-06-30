import React from 'react';
import keyboard from './keyboard.svg';

export default function Logo() {
  return (
    <div className="logo">
      <img alt={'logo'} src={keyboard} />
      <span>
        TYPING <br /> COACHER
      </span>
    </div>
  );
}
