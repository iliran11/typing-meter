import React from 'react';
import keyboard from './keyboard.svg';

export default function Logo() {
  const isMobile = window.innerWidth < 480;
  const breakPoint = isMobile ? <br /> : null;
  const spanMarginTop = isMobile ? 4 : 0;
  return (
    <div className="logo">
      <img alt={'logo'} src={keyboard} />
      <span style={{ marginTop: spanMarginTop }}>
        TYPING {breakPoint}COACHER
      </span>
    </div>
  );
}
