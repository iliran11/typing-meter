import React from 'react';
import Letter from './Letter.jsx'

export default function Word({ displayedLetters, typedLetters, isCompleted, isCorrect, shouldFocusWord, isActive }) {
    const comparisonResult = compareTypedToDisplayed(displayedLetters, typedLetters)
    const containerStyle = getContainerStyle(isCompleted, isCorrect)
    const activeClassName = isActive ? 'active' : ''
    return (
        <span className={`${containerStyle} ${activeClassName}`} ref={shouldFocusWord} tabIndex='1'>
            {
                comparisonResult.map((element, index) => {
                    if (isCompleted) return <Letter value={element.letter} key={index} />
                    return <Letter value={element.letter} status={element.status} key={index} />
                })
            }
        </span>
    );
}
function getContainerStyle(isCompleted, isCorrect) {
    if (isCompleted) return isCorrect ? 'correct-word word' : 'incorrect-word word'
    return 'word'
}
function compareTypedToDisplayed(displayed, typed) {
    return displayed.map((displayedElement, index) => {
        let status;
        if (typed === undefined) {
            status = null
        }
        else if (typed[index] === undefined) {
            status = null
        }
        else if (typed[index] === displayedElement) {
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