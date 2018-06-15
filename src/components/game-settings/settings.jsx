import React from 'react';
import TextField from 'material-ui/TextField';
import { GAME_DURATION_OPTIONS } from '../../constants';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import { processTextToArray } from '../../utils';

class SettingsForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      gameDuration: this.props.gameDuration,
      customWords: null
    };
    this.handleCustomWords = event => {
      this.setState({
        customWords: event.target.value
      });
    };
    this.handleGameDurationChange = (event, index, value) => {
      this.setState({
        gameDuration: value
      });
    };
    this.onSubmit = event => {
      event.preventDefault();
      this.props.updateCustomWords(this.state.customWords);
      this.props.updateGameDuration(this.state.gameDuration);
      this.props.history.push('/');
    };
  }
  get customTextErrorMessage() {
    const numbersOfWords = processTextToArray(this.state.customWords || '').length;
    if (numbersOfWords < 25) {
      return `Current Number Of words is ${numbersOfWords}. Minimum Allowed is 25`;
    }
    return '';
  }

  render() {
    return (
      <form>
        <h2>Settings</h2>
        <div className="toggle-control" />
        <TextField
          errorText={this.customTextErrorMessage}
          defaultValue={this.props.customWords}
          multiLine={true}
          rows={1}
          rowsMax={6}
          fullWidth={true}
          onChange={this.handleCustomWords}
          floatingLabelText="Insert Custom Typing Text"
        />

        <div>
          <div className="slider-control">
            <SelectField
              floatingLabelText="Game Duration"
              value={this.state.gameDuration}
              onChange={this.handleGameDurationChange}
              fullWidth
            >
              {GAME_DURATION_OPTIONS.map((option, index) => {
                const { value, label } = option;
                return (
                  <MenuItem value={value} primaryText={label} key={value} />
                );
              })}
            </SelectField>
          </div>
        </div>
        <RaisedButton label="submit" primary={true} onClick={this.onSubmit} />
      </form>
    );
  }
}
export default SettingsForm;
