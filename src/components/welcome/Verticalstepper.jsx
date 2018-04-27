import React from 'react';
// import WelcomeModal from '../welcomeModal';
import { StepLabel, Step, Stepper, StepContent } from 'material-ui/Stepper';
import StepperNumber from './stepperNumber';
import { fontReset } from '../../styles';
import StepActions from './stepActions';
import stepperContent from './stepperContent';
import Settings from '../settings';
import { SETTINGS_FORM } from '../../constants';

export default function CardsWelcome(props) {
  const { onWelcomeContinue, activeStep, incrementStep, decrementStep, setCustomWords,setGameDuration } = props;
  const Buttons = (
    <StepActions
      stepIndex={activeStep}
      onWelcomeContinue={onWelcomeContinue}
      incrementStep={incrementStep}
      decrementStep={decrementStep}
      stepsNumber={stepperContent.length - 1}
    />
  );
  return (
    <Stepper orientation="vertical" activeStep={activeStep}>
      {stepperContent.map((element, index) => {
        const content =
          element.key === SETTINGS_FORM ? (
            <Settings setGameDuration={setGameDuration} setCustomWords={setCustomWords} />
          ) : (
            element.content
          );
        return (
          <Step key={index}>
            <StepLabel icon={<StepperNumber number={index} />} style={fontReset}>
              {element.label}
            </StepLabel>
            <StepContent>
              {content}
              {Buttons}
            </StepContent>
          </Step>
        );
      })}
    </Stepper>
  );
}
