import React, { PureComponent } from 'react';
import io from 'socket.io-client';

class MultiPlayerGamePage extends PureComponent {
  constructor() {
    super();
    this.socket = io('http://localhost:4000');
    this.socket.emit('ferret', 'tobi', (data) => {
      console.log(data); // data will be 'woot'
    });
  }
  render() {
    return <div>hi</div>;
  }
}

export default MultiPlayerGamePage;
