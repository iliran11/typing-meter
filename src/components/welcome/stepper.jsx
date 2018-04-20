import React from 'react';
// import WelcomeModal from '../welcomeModal';
import { StepLabel, Step, Stepper, StepContent } from 'material-ui/Stepper';
import StepperNumber from './stepperNumber';
import { fontReset } from '../../styles';
import StepActions from './stepActions';

export default function CardsWelcome(props) {
  const { onWelcomeContinue, activeStep, incrementStep, decrementStep } = props;
  const Buttons = (
    <StepActions
      stepIndex={activeStep}
      onWelcomeContinue={onWelcomeContinue}
      incrementStep={incrementStep}
      decrementStep={decrementStep}
    />
  );
  return (
    <Stepper orientation="vertical" activeStep={activeStep}>
      <Step>
        <StepLabel icon={<StepperNumber number={1} />} style={fontReset}>
          start
        </StepLabel>
        <StepContent>
          <p>Start the test and click the input to start typing</p>
          {Buttons}
        </StepContent>
      </Step>
      <Step>
        <StepLabel icon={<StepperNumber number={2} />} style={fontReset}>
          Accurate
        </StepLabel>
        <StepContent>
          <p>While typing, take care of your typing accuracy. You can always fix back with backspace.</p>
          {Buttons}
        </StepContent>
      </Step>
      <Step>
        <StepLabel icon={<StepperNumber number={3} />} style={fontReset}>
          Results
        </StepLabel>
        <StepContent>
          <p>
            See your WPM score<i className="far fa-question-circle question-mark" />
          </p>
          {Buttons}
        </StepContent>
      </Step>
      <Step>
        <StepLabel icon={<StepperNumber number={4} />} style={fontReset}>
          Compare
        </StepLabel>
        <StepContent>
          <p>Compare your score to others.</p>
          {Buttons}
        </StepContent>
      </Step>
    </Stepper>
  );
}
