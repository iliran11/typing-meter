import React from 'react';
import { noop } from '../utils';

export default function AppBar(props) {
  const { onSettingsClick = noop } = props;
  return (
    <div className="app-bar">
      <div className="left-hand">
        <i className="fab fa-angellist logo" />
      </div>

      <div className="right-hand">
        <i className="fas fa-cog" onClick={onSettingsClick} />
        <i className="fab fab fa-github github" />
      </div>
    </div>
  );
}
