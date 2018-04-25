import React from 'react';
import TextField from 'material-ui/TextField';
import Slider from 'material-ui/Slider';
import { resetMargin } from '../styles';
import { GAME_DURATION } from '../constants';

class SettingsForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      gameDuration: GAME_DURATION
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
      this.props.setGameDuration(event, value);
    };
  }

  render() {
    return (
      <form>
        <TextField
          floatingLabelText="Practice Text"
          multiLine={true}
          fullWidth={true}
          onChange={this.props.setCustomWords}
        />
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
