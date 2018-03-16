import React from 'react';
import { secondaryStyle } from '../../styles';
import { Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle } from 'material-ui/Toolbar';
import ScoreSection from './score-section';
export default function ScoreBoard(props) {
  const { cpm, correctTypedWords } = props;
  return (
    <div>
      <Toolbar text="TITLE" className="secondary-toolbar" style={secondaryStyle}>
        <ToolbarGroup style={{ padding: 20 }}>
          <ScoreSection title="CORRECT" iconClass="fas fa-check-circle" score={correctTypedWords} />
        </ToolbarGroup>
        <ToolbarGroup style={{ padding: 20 }}>
          <ScoreSection title="WPM" iconClass="fas fa-tachometer-alt" score={cpm} />
        </ToolbarGroup>
      </Toolbar>
    </div>
  );
}