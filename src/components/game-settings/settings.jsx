import React from "react";
import TextField from "material-ui/TextField";
import { GAME_DURATION_OPTIONS, GAME_DURATION } from "../../constants";
import SelectField from "material-ui/SelectField";
import MenuItem from "material-ui/MenuItem";
import {
  getCustomWordsStorage,
  getGameDurationStorage
} from "../../storageHelpers";
import isNan from "lodash.isnan";
import { updateCustomWords } from "./settingsActions";

class SettingsForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      gameDuration: this.gameDurationStorage,
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
      console.log(this.props.updateCustomWords)
      this.props.updateCustomWords(this.state.customWords);

      sessionStorage.setItem("gameDuration", this.state.gameDuration);
      this.props.history.push("/");
    };
  }
  get gameDurationStorage() {
    /** storage hold strings. we need integers for the values. */
    const data = parseInt(getGameDurationStorage(), 10);
    if (isNan(data)) return GAME_DURATION;
    return data;
  }
  get CustomWordsStorage() {
    return getCustomWordsStorage();
  }

  render() {
    return (
      <form>
        <h2>Settings</h2>
        <div className="toggle-control" />
        <TextField
          defaultValue={this.CustomWordsStorage}
          multiLine={true}
          rows={1}
          rowsMax={6}
          // hintText={this.typeCustomText}
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
        <button onClick={this.onSubmit}>submit</button>
      </form>
    );
  }
}
export default SettingsForm;
