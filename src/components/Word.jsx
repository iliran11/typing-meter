import React from 'react'
import Letter from './Letter.jsx'
import scrollIntoView from 'scroll-into-view'


class Word extends React.Component {
    constructor(props) {
        super(props);
        this.isNowActive = false;
    }
    shouldComponentUpdate = (nextProps, nextState) => {
        return nextProps.isActive
    }
    getContainerStyle = () => {
        const { isCompleted, isCorrect } = this.props
        /** if word is marked as completed - return completed badly, or completely correct */
        if (isCompleted) return isCorrect ? 'correct-word word' : 'incorrect-word word'
        /** else - a generic word class. */
        return 'word'
    }
    compareTypedToDisplayed = () => {
        /** to be refactored!! */
        const { displayedLetters, typedLetters } = this.props;
        return displayedLetters.map((displayedElement, index) => {
            let status;
            if (typedLetters === undefined) {
                status = null
            }
            else if (typedLetters[index] === undefined) {
                status = null
            }
            else if (typedLetters[index] === displayedElement) {
                status = 'SUCCESS'
            }
            else {
                status = 'FAILED'
            }
            return {
                status,
                letter: displayedElement
            }
        })
    }
    getLetters = () => {
        const { isCompleted } = this.props;
        const comparisonResult = this.compareTypedToDisplayed()
        return comparisonResult.map((element, index) => {
            if (isCompleted) return <Letter value={element.letter} key={index} />
            return <Letter value={element.letter} status={element.status} key={index} />
        })
    }
    componentWillUpdate = (nextProps) => {
        const { isActive: nextIsActive } = nextProps;
        const { isActive: previousIsActive } = this.props;
        /** check if unactive word, is going into active state. */
        const beingActivated = previousIsActive === false && nextIsActive
        if (beingActivated) {
            this.focusWord()
        }
    }
    focusWord = () => {
        const nextWord = this.nodeDom.parentNode;
        const wordsContainer = this.nodeDom.parentNode.parentNode
        /** height of the words container */
        const containerHeight = wordsContainer.clientHeight;
        /** amount from the upper point of the scorlling window, to the top of the actual element */
        const containerScorllingOffset = wordsContainer.scrollTop
        /** number of pixels from the top of the element to the bottom of the scrolling window */
        const distanceFromHeadtoBottomScrollViewPort = (containerHeight + containerScorllingOffset)
        /** check if the next active word is below the viewport of the scrolling window */
        const isNextWordBelowScrolling = nextWord.offsetTop > distanceFromHeadtoBottomScrollViewPort
        /** check if the next active word is above the viewport of the scrolling window */
        const isNextWordAboveScrolling = containerScorllingOffset > nextWord.offsetTop
        /** detect if a work */
        if (isNextWordBelowScrolling || isNextWordAboveScrolling) {
            console.log('focus!')
            scrollIntoView(nextWord, {
                time: 200,
                align: {
                    top: 0.9
                },
                isScrollable: () => true
            }, () => {
            })
        }
    }
    getNode = (nodeDom) => {
        this.nodeDom = nodeDom
    }
    render = () => {
        const { isActive } = this.props;
        const containerStyle = this.getContainerStyle();
        const activeClassName = isActive ? 'active' : ''
        const Letters = this.getLetters()
        return (
            <span className={`${containerStyle} ${activeClassName}`} ref={this.getNode} tabIndex='1'>
                {Letters}
            </span>
        )
    }
}

export default Word