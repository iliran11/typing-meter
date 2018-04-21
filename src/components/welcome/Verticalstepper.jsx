import React from 'react';
// import WelcomeModal from '../welcomeModal';
import { StepLabel, Step, Stepper, StepContent } from 'material-ui/Stepper';
import StepperNumber from './stepperNumber';
import { fontReset } from '../../styles';
import StepActions from './stepActions';
import Settings from '../settings'

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
          START
        </StepLabel>
        <StepContent>
          <p>After you complete the introduction, Start the test by clicking the input field and start typing!</p>
          <Settings/>
          {Buttons}
        </StepContent>
      </Step>
      <Step>
        <StepLabel icon={<StepperNumber number={2} />} style={fontReset}>
          ACCURATE
        </StepLabel>
        <StepContent>
          <p>The more accurate you type - the better the result</p>
          <p>Watch for red words - you can go back and fix them!</p>
          {Buttons}
        </StepContent>
      </Step>
      <Step>
        <StepLabel icon={<StepperNumber number={3} />} style={fontReset}>
          RESULTS
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
          COMPARE&ANALYZE
        </StepLabel>
        <StepContent>
          <p>Compare your score to others.</p>
          {Buttons}
        </StepContent>
      </Step>
    </Stepper>
  );
}
