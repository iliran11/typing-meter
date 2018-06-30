import React from 'react';
import { secondaryStyle } from '../../styles';
import { Toolbar, ToolbarGroup } from 'material-ui/Toolbar';
import ScoreSection from './score-section';
import { number, bool } from 'prop-types';
import speedometer from './speedometer.svg'

export default function ScoreBoard(props) {
  const { wpm, disabled, specialScoreClass,wpmRef } = props;
  return (
    <div className="scoreboard-container">
      <Toolbar
        text="TITLE"
        className="secondary-toolbar transitionable joyride-step-scoreboard"
        style={secondaryStyle}>
        <ToolbarGroup>
          <ScoreSection
            title="Words Per Minute"
            icon={speedometer}
            iconAlt={'speedometer'}
            score={wpm}
            disabled={disabled}
            className="joyride-step--wpm"
            specialScoreClass={specialScoreClass}
            getRef={wpmRef}
          />
        </ToolbarGroup>
      </Toolbar>
    </div>
  );
}

ScoreBoard.prototypes = {
  wpm: number,
  correctTypedWords: number,
  disabled: bool
};
