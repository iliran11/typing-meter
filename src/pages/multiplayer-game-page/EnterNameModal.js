import React, { PureComponent } from 'react';
import Dialog from 'material-ui/Dialog';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

class EnterNameModal extends PureComponent {
  constructor() {
    super();
    this.onNameInput = this.onNameInput.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.state = {
      name: ''
    };
  }
  onNameInput(event) {
    this.setState({ name: event.target.value });
  }
  onSubmit() {
    this.props.onSubmit(this.state.name);
  }
  get buttonStyle() {
    return {
      display: 'block',
      marginTop: 20,
      backgroundColor: 'green'
    };
  }
  render() {
    return (
      <Dialog open={this.props.open}>
        <h1>Enter Your Name</h1>
        <TextField value={this.state.name} onChange={this.onNameInput} id="player-name" />
        <RaisedButton style={this.buttonStyle} onClick={this.onSubmit}>
          Submit Your Name
        </RaisedButton>
      </Dialog>
    );
  }
}

export default EnterNameModal;
