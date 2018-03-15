import React from 'react';
import { Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle } from 'material-ui/Toolbar';
import FontIcon from 'material-ui/FontIcon';
import { blue500, red500, greenA200 } from 'material-ui/styles/colors';
import FontAwesome from 'react-fontawesome';

export default function ScoreBoard(props) {
  const { timeLeft, cpm, correctTypedWords } = props;
  console.log(FontAwesome);
  return (
    <div>
      <Toolbar text="TITLE">
        <i class="fas fa-camera-retro" />
        <ToolbarGroup firstChild={true}>hjkhjhj</ToolbarGroup>
      </Toolbar>
    </div>
  );
}
