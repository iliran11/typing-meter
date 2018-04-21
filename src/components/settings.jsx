import React from 'react';
import TextField from 'material-ui/TextField';
import Slider from 'material-ui/Slider';

class SettingsForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      gameDuration: 20,
    };
    this.handleSlider = (event, value) => {
      console.log(value);
    };
    this.handleCustomWords = event => {
      this.setState({
        customWords: event.target.value
      });
    };
  }

  render() {
    return (
      <div>
        <TextField floatingLabelText="Practice Text" multiLine={true} fullWidth={true} onChange={this.props.setCustomWords} />
        <Slider min={20} max={120} step={20} onChange={this.props.setCustomWords} />
      </div>
    );
  }
}
export default SettingsForm;
