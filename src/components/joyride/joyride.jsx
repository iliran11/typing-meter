import React from 'react';
import Joyride from 'react-joyride';

const steps = [
  {
    title: 'Score Board',
    selector: '.joyride-step-scoreboard',
    text: 'Your metrics will update while you play typing.'
  },
  {
    position: 'top-left',
    selector: '.joyride-step--correct',
    title: 'Number of Correctly Typed Words',
    text:
      'The number of wholly correct words. a correct word has a green background.'
  },
  {
    title: 'Words Per Minute',
    position: 'top-right',
    selector: '.joyride-step--wpm',
    text: (
      <div className="joyride-box--wpm">
        <span>The Score of Your Game.</span>
        <br />
        <span>Will update as you type.</span>
        <br />
        <span>
          The less errors your make, and the faster you type, the score will be
          higher.
        </span>
        <br />
        <a href="http://indiatyping.com/index.php/typing-tips/typing-speed-calculation-formula">
          Read More ...{' '}
        </a>
      </div>
    )
  },
  {
    title: 'Start Typing',
    selector: '.joyride-step--input',
    text: 'Start the game by typing in the input!'
  }
];
export default function WalkThrough(props) {
  return (
    <Joyride
      run={props.run}
      beacon={true}
      steps={steps}
      autoStart={true}
      type="continuous"
      callback={props.callback}
    />
  );
}
