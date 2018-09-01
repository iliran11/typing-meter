import React, { PureComponent } from 'react';
import cx from 'classnames'

class EmptySpace extends PureComponent {
  get spaceClassName() {
    const { typedLetters } = this.props;
    return {
      'correct-word': typedLetters === ' ',
      'incorrect-word': typedLetters !== ' ' && typedLetters.length > 0
    }
  }
  render() {
    return (
      <div className='empty-space'>
        <span className={cx(this.spaceClassName)}>&nbsp;</span>
      </div>
    )
  }
}

export default EmptySpace;
