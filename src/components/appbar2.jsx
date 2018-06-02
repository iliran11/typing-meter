import React from 'react';
import { Link } from 'react-router-dom';

export default function AppBar(props) {
  return (
    <div className="app-bar">
      <div className="left-hand">
        <Link to="/">
          <i className="fab fa-angellist logo" />
        </Link>
      </div>

      <div className="right-hand">
        <Link to="/settings">
          <i className="fas fa-cog" />
        </Link>
        <i className="fab fab fa-github github" />
      </div>
    </div>
  );
}
