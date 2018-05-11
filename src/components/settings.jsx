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
      this.setState({
        customWords: event.target.value
      });
    };
    this.handleSliderChange = (event, value) => {
      this.setState({
        gameDuration: value
      });
    };
    this.onSubmit = (event) => {
      event.preventDefault();
      this.props.onSubmit({
        customWords: this.state.customWords,
        gameDuration: this.state.gameDuration
      });
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
    return 'Custom Text';
  }
  get typeCustomText() {
    return 'Put your custom text here';
  }

  render() {
    return (
      <form>
        <div className="toggle-control">
          <label className="label">{this.toggleLabel}</label>
          <Toggle onToggle={this.onToggle} defaultToggled={false} />
        </div>
        {this.state.customText && (
          <TextField
            multiLine={true}
            rows={1}
            rowsMax={6}
            hintText={this.typeCustomText}
            fullWidth={true}
            onChange={this.handleCustomWords}
          />
        )}
        <div>
          <div className="slider-control">
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
        </div>
        <button onClick={this.onSubmit}>submit</button>
      </form>
    );
  }
}
export default SettingsForm;
