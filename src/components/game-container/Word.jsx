import React from 'react';
import Letter from './Letter.jsx';
import scrollIntoView from 'scroll-into-view';
import { FAILURE_ANIMATION, SUCCESS_ANIMATION } from '../../constants';

class Word extends React.Component {
  constructor(props) {
    super(props);
    this.animationClasses = '';
  }
  shouldComponentUpdate = (nextProps, nextState) => {
    const typedWordsChanged = this.props.typedLetters.length !== nextProps.typedLetters.length;
    const isGoingActive = nextProps.isActive === true && this.props.isActive === false;
    /** render the component if there is a new typing information OR the word is going to get active. */
    return typedWordsChanged || isGoingActive;
  };
  getContainerStyle = () => {
    const { isCompleted, isCorrect } = this.props;
    /** if word is marked as completed - return completed badly, or completely correct */
    if (isCompleted) return isCorrect ? 'correct-word word' : 'incorrect-word word';
    /** else - a generic word class. */
    return 'word';
  };
  compareTypedToDisplayed = () => {
    /** to be refactored!! */
    const { displayedLetters, typedLetters } = this.props;
    return displayedLetters.map((displayedElement, index) => {
      let status;
      if (typedLetters === undefined) {
        status = null;
      } else if (typedLetters[index] === undefined) {
        status = null;
      } else if (typedLetters[index] === displayedElement) {
        status = 'SUCCESS';
      } else {
        status = 'FAILED';
      }
      return {
        status,
        letter: displayedElement
      };
    });
  };
  getLetters = () => {
    const comparisonResult = this.compareTypedToDisplayed();
    return comparisonResult.map((element, index) => {
      return <Letter value={element.letter} status={element.status} key={index} />;
    });
  };
  componentWillUpdate = nextProps => {
    // console.log(this.props.displayedLetters.join(''),nextProps)
    const { isCompleted, isActive } = nextProps;
    const isJustCompleted = isCompleted && isActive === false;
    if (isJustCompleted) {
      this.onJustCompleted(nextProps);
    }
  };
  componentDidUpdate = prevProps => {
    const { isActive: prevIsActive } = prevProps;
    const { isActive: currentIsActive } = this.props;
    /** check if unactive word, is going into active state. */
    const beingActivated = currentIsActive && prevIsActive === false;
    if (beingActivated) {
      this.onJustBeingActive();
    }
  };
  onJustCompleted = nextProps => {
    /** triggered from componentWillUpdate */
    const { isCorrect } = nextProps;
    // console.log(this.props.displayedLetters.join(''),nextProps)
    if (isCorrect) {
      this.animationClasses = SUCCESS_ANIMATION;
    } else {
      this.animationClasses = FAILURE_ANIMATION;
    }
  };
  onJustBeingActive = () => {
    /** triggered from comonentDidUpdate  */
    this.animationClasses = null;
    this.focusWord();
  };
  focusWord = () => {
    const nextWord = this.nodeDom;
    const wordsContainer = this.nodeDom.parentNode.parentNode;
    /** height of the words container */
    const containerHeight = wordsContainer.clientHeight;
    /** amount from the upper point of the scorlling window, to the top of the actual element */
    const containerScorllingOffset = wordsContainer.scrollTop;
    /** number of pixels from the top of the element to the center of the scrolling window */
    const threshold = containerHeight * 0.5 + containerScorllingOffset;
    /** check if the next active word is not aligned with threshold */
    const isNextWordOutsideThreshold = nextWord.offsetTop !== threshold;
    /** if the word is below or above the thresehold - make it higher */
    if (isNextWordOutsideThreshold) {
      scrollIntoView(
        nextWord,
        {
          time: 200,
          align: {
            top: 0.2
          },
          isScrollable: () => true
        },
        () => {}
      );
    }
  };
  getNode = nodeDom => {
    this.nodeDom = nodeDom;
  };
  render = () => {
    const { props: isActive, animationClasses } = this;
    const containerStyle = this.getContainerStyle();
    const activeClassName = isActive ? 'active' : '';
    const Letters = this.getLetters();
    const containerClasses = `${containerStyle} ${activeClassName} ${animationClasses}`;
    return (
      <span className={containerClasses} ref={this.getNode} tabIndex="1">
        {Letters}
      </span>
    );
  };
}

export default Word;
