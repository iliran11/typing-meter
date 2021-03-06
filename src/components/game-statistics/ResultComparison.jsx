import React from 'react';
import Tooltip from '../Tooltip';
import { gameStats } from './gameStats';

class ResultComparison extends React.Component {
  constructor(props) {
    super(props);
    this.width = 100;
  }
  componentDidMount() {
    this.width = 100 - this.percentile;
  }
  get graphStyle() {
    return {
      width: `${this.width}%`
    };
  }
  get percentile() {
    return gameStats(this.props.result).percentile;
  }
  render() {
    return (
      <div className="result-comparison">
        <div className="expanding-graph">
          <div className="revealer" style={this.graphStyle}>
            <Tooltip result={this.percentile} />
          </div>
        </div>
        <div className="small-label">Where You Stand Against Others</div>
      </div>
    );
  }
}

export default ResultComparison;
