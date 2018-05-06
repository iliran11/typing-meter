import React, { Fragment } from 'react';
import Word from './Word';

export default function WordsBoard(props) {
  const { words, currentGamePosition,isActive } = props;
  const disableClass = isActive ? '' : 'disabled'
  const wordsBoardClasses = `words-container size1 transitionable ${disableClass}`
  const renderWords = (word, index) => {
    const isActive = index === currentGamePosition;
    return (
      <Fragment key={word.key}>
        <Word
          displayedLetters={word.challenge.split('')}
          typedLetters={word.typed.split('')}
          isCompleted={word.isCompleted}
          isCorrect={word.isCorrect}
          isActive={isActive}
        />{' '}
      </Fragment>
    );
  };
  return <div className={wordsBoardClasses}>{words.map(renderWords)}</div>;
}
