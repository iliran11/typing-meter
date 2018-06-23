import React from 'react';
import { secondaryStyle } from '../../styles';
import { Toolbar, ToolbarGroup } from 'material-ui/Toolbar';
import ScoreSection from './score-section';
import { number,string,bool} from 'prop-types'

export default function ScoreBoard(props) {
  const { wpm, correctTypedWords, disabled } = props;
  return (
    <div className="scoreboard-container">
      <Toolbar text="TITLE" className="secondary-toolbar transitionable joyride-step-scoreboard" style={secondaryStyle}>
        <ToolbarGroup>
          <ScoreSection
            title="CORRECT"
            iconClass="fas fa-check-circle"
            score={correctTypedWords}
            disabled={disabled}
            className="joyride-step--correct"
          />
        </ToolbarGroup>
        <ToolbarGroup>
          <ScoreSection title="WPM" iconClass="fas fa-tachometer-alt" score={wpm} disabled={disabled} className="joyride-step--wpm" />
        </ToolbarGroup>
      </Toolbar>
    </div>
  );
}

ScoreBoard.prototypes = {
  wpm:number,
  correctTypedWords: number,
  disabled: bool
}
