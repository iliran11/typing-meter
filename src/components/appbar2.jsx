import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './logo/logo';
import tutorial from './play-button.svg'


export default function AppBar(props) {
  const { walkThroughIconStatus, toggleWalkthrough } = props;
  const infoIconStyle = walkThroughIconStatus ? {} : { opacity: 0.5 };
  const infoIconOnClick = walkThroughIconStatus ? toggleWalkthrough : null;
  return (
    <div className="app-bar">
      <div className="left-hand">
        <Link to="/">
          <Logo />
        </Link>
      </div>
      {/*TODO: Refactor to Bar-Item Component */}
      <div className="right-hand">
        <Link to="/settings" className="bar-item">
          <i className="fas fa-cog" />
          <span>Settings</span>
        </Link>
        <Link to="" className="bar-item">
          <img
            className="fas fa-info-circle"
            onClick={infoIconOnClick}
            style={infoIconStyle}
            src={tutorial}
          />
          <span>Guide Me</span>
        </Link>
        <Link to={""} className="bar-item">
          <i
            className="fas fa-info-circle"
          />
          <span>About</span>
        </Link>
      </div>
    </div>
  );
}
