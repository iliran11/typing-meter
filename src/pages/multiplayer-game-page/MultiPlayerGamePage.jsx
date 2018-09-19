import React, { PureComponent } from 'react';
import {initSocket} from '../../utils/socketHandler'

class MultiPlayerGamePage extends PureComponent {
  constructor(props) {
    super(props);
    initSocket(props.dispatch)

  }
  render() {
    return <div>hi</div>;
  }
}

export default MultiPlayerGamePage;
