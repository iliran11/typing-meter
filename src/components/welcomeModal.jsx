import React from 'react';
import KeyboardIcon from 'material-ui/svg-icons/hardware/keyboard';
import { svgStyle, fontReset } from '../styles';
import { StepLabel, Step, Stepper } from 'material-ui/Stepper';
import RaisedButton from 'material-ui/RaisedButton';
import StepperNumber from './welcome/stepperNumber'

export default function WelcomeModal(props) {
  console.log(svgStyle);
  const { open, onContinue } = props;
  if (!open) return null;
  return (
    <section className="welcome-section">
      <div className="title">
        <div className="svg-wrapper keyboard-icon svg-size-huge">
          <KeyboardIcon style={svgStyle} />
        </div>
        <h1>How fast are your fingers?</h1>
      </div>
      <div className="content size4">
        <Stepper orientation="vertical">
          <Step >
            <StepLabel icon={<StepperNumber number={1}/>} style={fontReset}>Start the test and click the input to start typing.</StepLabel>
          </Step>
          <Step>
            <StepLabel icon={<StepperNumber number={2}/>} style={fontReset} >
              While typing, take care of your typing accuracy. You can always fix back with backspace.
            </StepLabel>
          </Step>
          <Step>
            <StepLabel icon={<StepperNumber number={3}/>}style={fontReset}>
              <div>
                See your WPM score<i className="far fa-question-circle question-mark" />
              </div>
            </StepLabel>
          </Step>
          <Step>
            <StepLabel icon={<StepperNumber number={4}/>}style={fontReset}>Compare your score to others.</StepLabel>
          </Step>
        </Stepper>
      </div>
      <button onClick={onContinue}>
        Start Typing
      </button>
    </section>
  );
}
