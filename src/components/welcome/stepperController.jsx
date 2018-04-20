import React, { Component } from 'react';
import Stepper from './stepper';
import Dialog from 'material-ui/Dialog';

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
      </Dialog>
    );
  }
}

export default StepperController;
