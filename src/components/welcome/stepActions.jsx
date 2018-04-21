import React from 'react'
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';


export default function StepActions(props) {
    const {stepIndex,incrementStep,decrementStep,onWelcomeContinue} = props;
    const isLastStep = stepIndex === 3
    return (
      <div style={{margin: '12px 0'}}>
        <RaisedButton
          label={isLastStep ? 'Finish' : 'Next'}
          disableTouchRipple={true}
          disableFocusRipple={true}
          primary={true}
          onClick={isLastStep ? onWelcomeContinue : incrementStep}
          style={{marginRight: 12}}
        />
        {stepIndex > 0 && (
          <FlatButton
            label="Back"
            disabled={stepIndex === 0}
            disableTouchRipple={true}
            disableFocusRipple={true}
            onClick={decrementStep}
          />
        )}
      </div>
    );
}