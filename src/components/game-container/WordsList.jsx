import React, { Fragment } from 'react';
import Word from './Word2';
import EmptySpace from './emptySpace';

export default function WordsList(props) {
  const { words, currentGamePosition, isActive } = props;
  const disableClass = isActive ? '' : 'disabled';
  const wordsBoardClasses = `words-container size1 transitionable ${disableClass}`;
  const renderWords = (word, index) => {
    const isActive = index === currentGamePosition;
    if (word.challenge === ' ') {
      return <EmptySpace typedLetters={word.typed} key={word.key} />;
    }
    return (
      <Word
        key={word.key}
        displayedLetters={word.challenge.split('')}
        typedLetters={word.typed.split('')}
        isCompleted={word.isCompleted}
        isCorrect={word.isCorrect}
        isActive={isActive}
        isFirst={index === 0}
      />
    );
  };
  return <div className={wordsBoardClasses}>{words.map(renderWords)}</div>;
}
