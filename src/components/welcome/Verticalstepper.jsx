import React from 'react';
// import WelcomeModal from '../welcomeModal';
import { StepLabel, Step, Stepper, StepContent } from 'material-ui/Stepper';
import StepperNumber from './stepperNumber';
import { fontReset } from '../../styles';
import StepActions from './stepActions';
import stepperContent from './stepperContent';
import Settings from '../settings';

export default function CardsWelcome(props) {
  const { onWelcomeContinue, activeStep, incrementStep, decrementStep } = props;
  const Buttons = (
    <StepActions
      stepIndex={activeStep}
      onWelcomeContinue={onWelcomeContinue}
      incrementStep={incrementStep}
      decrementStep={decrementStep}
      stepsNumber = {stepperContent.length - 1}
    />
  );
  return (
    <Stepper orientation="vertical" activeStep={activeStep}>
      {stepperContent.map((element, index) => {
        return (
          <Step key={index}>
            <StepLabel icon={<StepperNumber number={index} />} style={fontReset}>
              {element.label}
            </StepLabel>
            <StepContent>
              {element.content}
              {Buttons}
            </StepContent>
          </Step>
        );
      })}
    </Stepper>
  );
}
