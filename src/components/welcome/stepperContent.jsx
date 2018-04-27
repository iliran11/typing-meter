import React, { Fragment } from 'react';
import {SETTINGS_FORM} from '../../constants'
export default [
  {
    label: 'SETTINGS',
    key: SETTINGS_FORM
  },
  {
    label: 'START',
    content: <p>After you complete the introduction, Start the test by clicking the input field and start typing!</p>
  },
  {
    label: 'ACCURATE',
    content: (
      <Fragment>
        <p>The more accurate you type - the better the result</p>
        <p>Watch for red words - you can go back and fix them!</p>
      </Fragment>
    )
  },
  {
    label: 'RESULTS',
    content: (
      <p>
        See your WPM score<i className="far fa-question-circle question-mark" />
      </p>
    )
  },
  {
    label: 'COMPARE&ANALYZE',
    content: <p>Compare your score to others.</p>
  }
];
