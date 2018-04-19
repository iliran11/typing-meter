import React from 'react';

export default function AppBar() {
  return (
    <div className="app-bar">
      <div className="left-hand">
        <i className="fab fa-angellist logo" />
      </div>
      
      <div className="right-hand">
        <i className="fas fa-cog" />
        <i className="fab fab fa-github github" />
      </div>
    </div>
  );
}
