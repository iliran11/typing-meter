import React from 'react';
import { Link } from 'react-router-dom';
import openSource from './assets/open-source.svg';
import bug from './assets/bug.svg';

export default [
  {
    text: (
      <Link to="https://github.com/iliran11/typing-meter">Read The Code</Link>
    ),
    img: openSource
  },
  {
    text: (
      <Link to="https://github.com/iliran11/typing-meter/issues">
        Report a bug
      </Link>
    ),
    img: bug
  }
];
