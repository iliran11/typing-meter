import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../logo/logo';
import tutorial from './play-button.svg';
import settings from './settings.svg';
import info from './information.svg';

class AppBar extends PureComponent {
  constructor() {
    super();
    this.appBarRef = React.createRef();
  }
  get infoIconStyle() {
    return this.props.walkThroughIconStatus ? {} : { opacity: 0.5 };
  }
  get infoIconClick() {
    return this.props.walkThroughIconStatus
      ? this.props.toggleWalkthrough
      : null;
  }
  get collapseStyle() {
    const {
      appBarRef,
      props: { isGameActive }
    } = this;

    if (this.appBarRef.current) {
      window.liran = this.appBarRef.current;
      return {
        marginTop: isGameActive ? appBarRef.current.clientHeight * -1 : 0
      };
    }
    return {};
  }
  render() {
    return (
      <div className="app-bar" style={this.collapseStyle} ref={this.appBarRef}>
        <div className="left-hand">
          <Link to="/">
            <Logo />
          </Link>
        </div>
        {/*TODO: Refactor to Bar-Item Component */}
        <div className="right-hand">
          <Link to="/settings" className="bar-item">
            <img src={settings} alt={settings} />
            <span>Settings</span>
          </Link>
          <Link to="" className="bar-item">
            <img
              className="walkthrough"
              onClick={this.infoIconOnClick}
              style={this.infoIconStyle}
              src={tutorial}
              alt={'guide me'}
            />
            <span>Guide Me</span>
          </Link>
          <Link to={'/about'} className="bar-item">
            <img src={info} alt={'info'} />
            <span>About</span>
          </Link>
        </div>
      </div>
    );
  }
}

export default AppBar;
