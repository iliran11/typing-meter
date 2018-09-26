import React, { PureComponent } from 'react';
import socketHandler from '../../utils/socketHandler';
import MyGameContainer from '../../components/game-container/MyGameContainer';
import EnterNameModal from './EnterNameModal';

class MultiPlayerGamePage extends PureComponent {
  constructor(props) {
    super(props);
    this.onNameSubmit = this.onNameSubmit.bind(this);
    this.state = {
      isNameModalOpen: true
    };
    socketHandler.initSocket(props.dispatch);
  }
  onNameSubmit(name) {
    this.setState({
      isNameModalOpen: !this.state.isNameModalOpen
    });
    this.props.broadcastMyName(name);
  }
  render() {
    return (
      <div>
        <EnterNameModal
          open={this.state.isNameModalOpen}
          onSubmit={this.onNameSubmit}
        />
        <div>hello world</div>
        {this.props.myGameId && (
          <MyGameContainer gameId={this.props.myGameId} />
        )}
      </div>
    );
  }
}

export default MultiPlayerGamePage;
