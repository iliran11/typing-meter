import React from 'react';
import Dialog from 'material-ui/Dialog';
import ChceckCircle from 'material-ui/svg-icons/action/check-circle';
import AutoRenew from 'material-ui/svg-icons/action/autorenew';
import { checkCircleStyle } from '../styles';
import ScoreSection from './scoreboard/score-section'
import {svgStyle,completionModalSvg,completionModalTitle,completionModalScore} from '../styles'


const Title = function() {
  return (
    <h1>
      <ChceckCircle style={checkCircleStyle} />
    </h1>
  );
};

export default function CompletionModal(props) {
  const { modal = false, open = true,correctTypedWords,wpmScore, onRestart } = props;
  const TitleNode = Title();
  return (
    <Dialog repositionOnUpdate={false} modal={modal} open={open} title={TitleNode} className="completion-dialog">
    <div className="completion-content">
      <h4 className="size2">Your Score</h4>
      <div className="score-report"> 
      <ScoreSection title="CORRECT" iconClass="fas fa-check-circle" score={correctTypedWords} titleStyle={completionModalTitle} svgStyle={completionModalSvg} scoreStyle={completionModalScore} />
      <ScoreSection title="WPM" iconClass="fas fas fa-tachometer-alt" score={wpmScore} titleStyle={completionModalTitle} svgStyle={completionModalSvg} scoreStyle={completionModalScore} />
      </div>
      <h4 className="size2">Try Again?</h4>
      <div>
      <div className="svg-wrapper svg-size1 restart" onClick={onRestart}>
      <AutoRenew style={svgStyle}/>
      </div>
      </div>
   </div>
    </Dialog>
  );
}
