import React, { Component,createRef } from 'react';
import Letter from './Letter.jsx';
import scrollIntoView from 'scroll-into-view';
import { FAILURE_ANIMATION, SUCCESS_ANIMATION } from '../../constants';
import LettersList from './LettersList';
import {focusNode} from '../../utils'

export default class Word extends Component {
  constructor(props) {
    super(props);
    this.wordRef = createRef();
  }
  componentDidUpdate = prevProps => {
    const { isActive: prevIsActive } = prevProps;
    const { isActive: currentIsActive } = this.props;
    /** check if unactive word, is going into active state. */
    const beingActivated = currentIsActive === true && prevIsActive === false;
    if (beingActivated) {
      console.log(this.wordRef)
      focusNode(this.wordRef.current);
    }
  };
  get isWordCorrectClass() {
    const { isCompleted, isCorrect } = this.props;
    /** we can assume if word is correct or not -
     *  only if the word is correct.
     */
    if (isCompleted) {
      return isCorrect ? 'correct-word' : 'incorrect-word';
    }
    return '';
  }
  get activeClass() {
    return this.props.isActive ? 'active' : '';
  }
  get animationClass() {
    const { isCompleted, isCorrect } = this.props;
    if (isCompleted) {
      return isCorrect ? SUCCESS_ANIMATION : FAILURE_ANIMATION;
    }
    return '';
  }
  get containerClasses() {
    return `word ${this.isWordCorrectClass} ${this.activeClass}`;
  }
  get letters() {
    return 'hello world';
  }
  render() {
    return (
      <span className={this.containerClasses} tabIndex="1" ref={this.wordRef}>
        <LettersList
          displayedLetters={this.props.displayedLetters}
          typedLetters={this.props.typedLetters}
        />
      </span>
    );
  }
}