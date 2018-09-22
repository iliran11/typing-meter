import React, { PureComponent } from 'react';
import socketHandler from '../../utils/socketHandler';
import MyGameContainer from '../../components/game-container/MyGameContainer';

class MultiPlayerGamePage extends PureComponent {
  constructor(props) {
    super(props);
    socketHandler.initSocket(props.dispatch);
  }
  render() {
    return (
      <div>
        {this.props.myGameId && <MyGameContainer gameId={this.props.myGameId} />}
      </div>
    );
  }
}

export default MultiPlayerGamePage;
