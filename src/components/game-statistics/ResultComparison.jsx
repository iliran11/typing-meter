import React from 'react'
import gameStats from './gameStats'

export default function ResultComparison(props) {
  const {wpmResult} = props
  const percentile = gameStats(wpmResult);

  return (
    <div className="result-comparison">hello</div>
  )
}