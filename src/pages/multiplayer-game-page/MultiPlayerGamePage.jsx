import React, { PureComponent } from 'react';
import { initSocket } from '../../utils/socketHandler';
import MyGameContainer from '../../components/game-container/MyGameContainer';

class MultiPlayerGamePage extends PureComponent {
  constructor(props) {
    super(props);
    initSocket(props.dispatch);
  }
  render() {
    return <div>{this.props.myGame && <MyGameContainer />}</div>;
  }
}

export default MultiPlayerGamePage;
