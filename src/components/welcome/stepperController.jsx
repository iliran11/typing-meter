import React, { Component } from 'react';
import Stepper from './Verticalstepper';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';

class StepperController extends Component {
  constructor(props) {
    super(props);
    this.state = {
      finished: false,
      stepIndex: 0
    };
    this.incrementStep = () => {
      this.setState({
        stepIndex: this.state.stepIndex + 1
      });
      this.decrementStep = () => {
        this.setState({
          stepIndex: this.state.stepIndex - 1
        });
      };
    };
  }
  get shouldRender() {
    return this.props.isOpen;
  }
  render() {
    if (this.shouldRender) {
      return (
        <React.Fragment>
          <Stepper
            activeStep={this.state.stepIndex}
            incrementStep={this.incrementStep}
            decrementStep={this.decrementStep}
            onWelcomeContinue={this.props.onWelcomeContinue}
            setCustomWords={this.props.setCustomWords}
            setGameDuration={this.props.setGameDuration}
          />
          <FlatButton label={'Skip'} primary={true} onClick={this.props.onWelcomeContinue} style={{ marginTop: 15 }} />
        </React.Fragment>
      );
    }
    return null;
  }
}

export default StepperController;
