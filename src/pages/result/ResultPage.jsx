import React from 'react';
import AutoRenew from 'material-ui/svg-icons/action/autorenew';
import ScoreSection from '../../components/scoreboard/score-section';
import { svgStyle } from '../../styles';
import ResultComparison from '../../components/game-statistics/ResultComparison';
import {
  delightPicture,
  resultDescription
} from '../../components/game-statistics/gameStats';
import { number, func } from 'prop-types';
import speedometer from '../../components/speedometer.svg';
import correctIcon from './correct.svg';
import history from '../../history'

const Title = function(props) {
  return (
    <div className="full-width background-primary text-center">
      <img
        alt={'Shows emotions about the result'}
        src={delightPicture(props.wpm)}
        className="delight-complete"
      />
    </div>
  );
};
function onRestart() {
  history.push(`/`);
}
export default function ResultPage(props) {
  const { correctTypedWords, wpmScore } = props;

  return (
    <div id="completion-content">
      <Title wpm={wpmScore} />
      <div className='full-width' style={{padding:'0px 20px'}}>
        <h4 className="size2" id="your-score">
          {resultDescription(wpmScore)}
        </h4>
        <ResultComparison result={wpmScore} />
        <div className="score-report">
          <ScoreSection
            title="CORRECT"
            iconClass="fas fa-check-circle"
            score={correctTypedWords}
            icon={correctIcon}
          />
          <ScoreSection
            title="WPM"
            iconClass="fas fas fa-tachometer-alt"
            score={wpmScore}
            icon={speedometer}
          />
        </div>
        <h4 className="size2 text-center">Try Again?</h4>
        <div className="restart">
          <div className="svg-wrapper svg-size1" onClick={onRestart}>
            <AutoRenew style={svgStyle}/>
          </div>
        </div>
      </div>
    </div>
  );
}

ResultPage.propTypes = {
  correctTypedWords: number,
  wpmScore: number,
  onRestart: func
};
