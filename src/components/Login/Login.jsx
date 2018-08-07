import React from 'react';
import Avatar from 'material-ui/Avatar';
import AnonymousUser from './assets/user.svg';

export default function FacebookLogin() {
  const style = {
    height: null,
    width: null
  };
  return (
    <div className="bar-item">
      <Avatar src={AnonymousUser} size={30} style={style} />
      <span>Login</span>
    </div>
  );
}
