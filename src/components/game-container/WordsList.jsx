import React, { Fragment } from 'react';
import Word from './Word2';

export default function WordsList(props) {
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
          isFirst={index===0}
        />{' '}
      </Fragment>
    );
  };
  return <div className={wordsBoardClasses}>{words.map(renderWords)}</div>;
}
