import React from 'react';
import { secondaryStyle } from '../../styles';
import { Toolbar, ToolbarGroup } from 'material-ui/Toolbar';
import ScoreSection from './score-section';
import { number, bool } from 'prop-types';

export default function ScoreBoard(props) {
  const { wpm, disabled, specialScoreClass } = props;
  return (
    <div className="scoreboard-container">
      <Toolbar
        text="TITLE"
        className="secondary-toolbar transitionable joyride-step-scoreboard"
        style={secondaryStyle}>
        <ToolbarGroup>
          <ScoreSection
            title="Words Per Minute"
            iconClass="fas fa-tachometer-alt"
            score={wpm}
            disabled={disabled}
            className="joyride-step--wpm"
            specialScoreClass={specialScoreClass}
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
