import React from 'react'
import AppBar from 'material-ui/AppBar';
import { appBarStyle } from '../styles';

const Icon = <i className="fab fa-angellist logo"></i>
const RightSide = (
  <div className="right-hand">
    <i className="fas fa-cog"></i>
    <i className="fab fab fa-github github"></i>

  </div>
)
export default function CustomAppBar () {
  return (
    <AppBar
    style={appBarStyle}
    className="app-bar"
    iconElementLeft={Icon}
    iconElementRight={RightSide}
    title="Typing Speed"
    >
  </AppBar>
  )
} 