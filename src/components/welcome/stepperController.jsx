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
  render() {
    return (
      <Dialog open={this.props.isOpen} className="welcome-section">
        <Stepper
          activeStep={this.state.stepIndex}
          incrementStep={this.incrementStep}
          decrementStep={this.decrementStep}
          onWelcomeContinue={this.props.onWelcomeContinue}
        />
        <FlatButton
          label={'Skip'}
          primary={true}
          onClick={this.props.onWelcomeContinue}
          style={{marginTop:15}}
        />
      </Dialog>
    );
  }
}

export default StepperController;
