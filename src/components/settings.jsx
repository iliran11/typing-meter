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
      <form>
        <TextField floatingLabelText="Practice Text" multiLine={true} fullWidth={true} onChange={this.props.setCustomWords} />
        <label>Game Duration: 20</label>
        <Slider min={1} max={10} step={1} onChange={this.props.setCustomWords} />
      </form>
    );
  }
}
export default SettingsForm;
