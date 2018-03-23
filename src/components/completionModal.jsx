import React from 'react';
import Dialog from 'material-ui/Dialog';
import ChceckCircle from 'material-ui/svg-icons/action/check-circle';
import AutoRenew from 'material-ui/svg-icons/action/autorenew';
import { checkCircleStyle } from '../styles';
import ScoreSection from './scoreboard/score-section'
import {completionRestartIcon,completionModalSvg,completionModalTitle,completionModalScore} from '../styles'

const Title = function() {
  return (
    <h1>
      <ChceckCircle style={checkCircleStyle} />
    </h1>
  );
};
export default function CompletionModal(props) {
  const { modal, open } = props;
  const TitleNode = Title();
  return (
    <Dialog modal={false} open={true} title={TitleNode} className="completion-dialog">
    <div className="completion-content">
      <h4>Your Score</h4>
      <div class="score-report"> 
      <ScoreSection title="CORRECT" iconClass="fas fa-check-circle" score={'1'} titleStyle={completionModalTitle} svgStyle={completionModalSvg} scoreStyle={completionModalScore} />
      <ScoreSection title="WPM" iconClass="fas fas fa-tachometer-alt" score={'1'} titleStyle={completionModalTitle} svgStyle={completionModalSvg} scoreStyle={completionModalScore} />
      </div>
      <h4>Try Again?</h4>
      <AutoRenew style={completionRestartIcon}/>
   </div>
    </Dialog>
  );
}
