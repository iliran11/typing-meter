import React from 'react';
import Dialog from 'material-ui/Dialog';
import ChceckCircle from 'material-ui/svg-icons/action/check-circle';
import AutoRenew from 'material-ui/svg-icons/action/autorenew';
import { checkCircleStyle } from '../styles';
import ScoreSection from './scoreboard/score-section';
import { svgStyle } from '../styles';
import ResultComparison from './game-statistics/ResultComparison';
import gameStats from './game-statistics/gameStats';
import { bool, number, func } from 'prop-types';

const Title = function() {
  return (
    <h1>
      <ChceckCircle style={checkCircleStyle} />
    </h1>
  );
};

export default function CompletionModal(props) {
  const {
    modal = false,
    open = true,
    correctTypedWords,
    wpmScore,
    onRestart
  } = props;
  const TitleNode = Title();
  const percentileResult = gameStats(wpmScore);
  return (
    <Dialog
      repositionOnUpdate={false}
      modal={modal}
      open={open}
      title={TitleNode}
      className="completion-dialog"
    >
      <div id="completion-content">
        <h4 className="size2" id="your-score">{`You type faster than ${
          percentileResult.percentile
        }% of others`}</h4>
        <ResultComparison result={wpmScore} />
        <div className="score-report">
          <ScoreSection
            title="CORRECT"
            iconClass="fas fa-check-circle"
            score={correctTypedWords}
          />
          <ScoreSection
            title="WPM"
            iconClass="fas fas fa-tachometer-alt"
            score={wpmScore}
          />
        </div>
        <h4 className="size2">Try Again?</h4>
        <div>
          <div className="svg-wrapper svg-size1 restart" onClick={onRestart}>
            <AutoRenew style={svgStyle} />
          </div>
        </div>
      </div>
    </Dialog>
  );
}

CompletionModal.propTypes = {
  modal: bool,
  repositionOnUpdate: bool,
  correctTypedWords: number,
  wpmScore: number,
  onRestart: func
};
