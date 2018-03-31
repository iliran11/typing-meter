import React from 'react';
import { secondaryStyle } from '../../styles';
import { Toolbar, ToolbarGroup } from 'material-ui/Toolbar';
import ScoreSection from './score-section';
export default function ScoreBoard(props) {
  const { cpm, correctTypedWords,disabled } = props;
  return (
    <div>
      <Toolbar text="TITLE" className="secondary-toolbar transitionable" style={secondaryStyle}>
        <ToolbarGroup>
          <ScoreSection title="CORRECT" iconClass="fas fa-check-circle" score={correctTypedWords} disabled={disabled}/>
        </ToolbarGroup>
        <ToolbarGroup>
          <ScoreSection title="WPM" iconClass="fas fa-tachometer-alt" score={cpm} disabled={disabled} />
        </ToolbarGroup>
      </Toolbar>
    </div>
  );
}
