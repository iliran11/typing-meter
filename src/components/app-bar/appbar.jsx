import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../logo/logo';
import tutorial from './play-button.svg';
import settings from './settings.svg';
import info from './information.svg';
import FacebookLogin from '../Login/LoginContainer';

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
        {/* <Link to="/settings" className="bar-item">
          <img src={settings} alt={settings} />
          <span>Settings</span>
        </Link> */}
        <FacebookLogin />
        <Link to="" className="bar-item">
          <img
            className="walkthrough"
            onClick={infoIconOnClick}
            style={infoIconStyle}
            src={tutorial}
            alt={'guide me'}
          />
          <span>Tour</span>
        </Link>
        <Link to={'/about'} className="bar-item">
          <img src={info} alt={'info'} />
          <span>About</span>
        </Link>
      </div>
    </div>
  );
}
