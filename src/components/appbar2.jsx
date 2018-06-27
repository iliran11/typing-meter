import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './logo/logo'

export default function AppBar(props) {
  const { walkThroughIconStatus, toggleWalkthrough } = props;
  const infoIconStyle = walkThroughIconStatus ? {} : { opacity: 0.5 };
  const infoIconOnClick = walkThroughIconStatus ? toggleWalkthrough : null;
  return (
    <div className="app-bar">
      <div className="left-hand">
        <Link to="/">
          <Logo/>
        </Link>
      </div>

      <div className="right-hand">
        <Link to="/settings">
          <i className="fas fa-cog" />
        </Link>
        <i className="fab fab fa-github github" />
        <i
          className="fas fa-info-circle"
          onClick={infoIconOnClick}
          style={infoIconStyle}
        />
      </div>
    </div>
  );
}
