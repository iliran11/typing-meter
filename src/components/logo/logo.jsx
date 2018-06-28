import React from 'react';
import keyboard from './keyboard.svg';

export default function Logo() {
  const isMobile = true;
  const spanMarginTop = isMobile ? 4 : 0;
  return (
    <div className="logo">
      <img alt={'logo'} src={keyboard} />
      <span style={{ marginTop: spanMarginTop }}>
        TYPING <br/> COACHER
      </span>
    </div>
  );
}
