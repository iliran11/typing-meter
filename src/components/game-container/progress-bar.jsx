import React from 'react'

export default function ProgressBar(props) {
  const {isProgressCounting} = props
  const animationClass = isProgressCounting ? 'progress-bar--animate ' : ''
  return (
    <div className={`progress-bar ${animationClass}`}></div>
  )
}