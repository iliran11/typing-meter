import React from 'react';
import Letter from './Letter';
import isUndefined from 'lodash.isundefined';

export default function LettersList(props) {
  const { displayedLetters, typedLetters } = props;
  const letters = displayedLetters.map((letter, index) => {
    const status = getLetterStatus(letter, typedLetters[index]);
    return <Letter value={letter} status={status} key={index} />;
  });
  return letters;
}

function getLetterStatus(typed, displayed) {
  if (isUndefined(displayed)) {
    return '';
  }
  if (typed === displayed) {
    return 'SUCCESS';
  } else {
    return 'FAILED';
  }
}
