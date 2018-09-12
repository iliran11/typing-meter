import React from 'react';
import WordsList from './WordsList'

export default function TypingBoard(props) {
  console.log(props.highlightedWordIndex)
  return (
    <WordsList
      words={props.words}
      isActive={true}
      currentGamePosition={props.highlightedWordIndex}
    />
  );
}
