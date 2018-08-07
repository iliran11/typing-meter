import React, { PureComponent } from 'react';
import Avatar from 'material-ui/Avatar';
import AnonymousUser from './assets/user.svg';

export default class Login extends PureComponent {
  onAvatarClick = () => {
    if (this.props.isConnected) {
      this.props.logout();
    } else {
      this.props.login();
    }
  };
  get avatarStyle() {
    return {
      height: null,
      width: null
    };
  }
  render() {
    console.log(this.props.isConnected);
    return (
      <div className="bar-item" onClick={this.onAvatarClick}>
        <Avatar src={AnonymousUser} size={30} style={this.style} />
        <span>Login</span>
      </div>
    );
  }
}
