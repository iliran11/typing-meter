import React from 'react';
import TextField from 'material-ui/TextField';
import Slider from 'material-ui/Slider';
import { resetMargin } from '../styles';
import { GAME_DURATION } from '../constants';
import Toggle from 'material-ui/Toggle';

class SettingsForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      gameDuration: GAME_DURATION,
      customText: false
    };
    this.handleCustomWords = event => {
      this.props.setCustomWords(event.target.value);
      this.setState({
        customWords: event.target.value
      });
    };
    this.handleSliderChange = (event, value) => {
      this.setState({
        gameDuration: value
      });
      this.props.setGameDuration(event, value);
    };
    this.onToggle = (event, value) => {
      console.log(value);
      if (value === false) {
        this.props.setCustomWords(null);
      }
      this.setState({
        customText: value
      });
    };
  }

  get toggleLabel() {
    return this.state.customText ? 'Default Text' : 'Insert your own text!';
  }

  render() {
    return (
      <form>
        <Toggle label={this.toggleLabel} onToggle={this.onToggle} defaultToggled={false} />
        {this.state.customText && (
          <TextField
            floatingLabelText="Practice Text"
            multiLine={true}
            fullWidth={true}
            onChange={this.handleCustomWords}
          />
        )}
        <div>
          <label>Game Duration: {this.state.gameDuration}</label>
          <Slider
            value={this.state.gameDuration}
            min={20}
            max={100}
            step={10}
            onChange={this.handleSliderChange}
            sliderStyle={resetMargin}
          />
        </div>
      </form>
    );
  }
}
export default SettingsForm;
