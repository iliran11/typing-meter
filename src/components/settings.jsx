import React from 'react';
import TextField from 'material-ui/TextField';
import Slider from 'material-ui/Slider';

class SettingsForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      gameDuration: 20
    };
    this.handleSlider = (event,value) => {
      console.log(value);
    };
  }

  render() {
    return (
      <div>
        <TextField floatingLabelText="Practice Text" multiLine={true} fullWidth={true} />
        <Slider min={20} max={120} step={20} value={this.state.gameDuration} onChange={this.handleSlider} />
      </div>
    );
  }
}
export default SettingsForm;
