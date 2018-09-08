import React,{PureComponent} from 'react'

class TypingBoard extends PureComponent {
  get inputValue() {

  }
  get onInputChange() {

  }
  get handleKeyPress() {

  }
  get inputClasses() {

  }
  get inputPlaceHolder() {

  }
  render() {
    return (
      <div className="input-container">
        <input
          autoFocus
          value={this.inputValue}
          onChange={this.onInputChange}
          onKeyDown={this.handleKeyPress}
          tabIndex="0"
          className={`input is-large is-primary size3 joyride-step--input ${
            this.inputClasses
          }`}
          placeholder={this.inputPlaceHolder}
          ref={this.inputRef}
        />
      </div>
    );
  }
}

export default TypingBoard