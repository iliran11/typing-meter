import React, { Component } from 'react';
import Word from './components/Word.jsx'
import scrollIntoView from 'scroll-into-view'
import randomWords from 'random-words'
import './App.css';
import 'bulma/css/bulma.css'

class App extends Component {
  constructor() {
    const overallTime = secondstoMillisecond(60)
    super()
    this.state = {
      overallTime,
      startTime: Date.now(),
      timeLeft: millisecondsToSeconds(overallTime),
      isGameActive: true,
      index: 0,
      scrollIndex: 0,
      words: generateLoremIpsum()
    }
    setInterval(() => {
      this.setState({
        timeLeft: this.getCurrentTimeLeft()
      })
    }, 1000)

  }
  currentWord = () => {
    return this.state.words[this.state.index]
  }
  getInputValue = () => {
    if (this.state.isGameActive === false) return ''
    return this.currentWord().typed
  }
  handleChange = (event) => {
    if (this.state.isGameActive === false) return ''
    const currentIndex = this.state.index
    const nextWordsArray = this.state.words.map((element, index) => {
      if (index === this.state.index) {
        return new createWordObject({
          challenge: element.challenge,
          typed: event.target.value
        })
      }
      return element
    })
    const nextGameStatus = this.isGameActive(nextWordsArray)
    const isIndexShouldIncrement = this.isIndexShouldIncrement(nextWordsArray, nextGameStatus)
    const nextIndex = isIndexShouldIncrement ? currentIndex + 1 : currentIndex
    this.setState({
      words: nextWordsArray,
      index: nextIndex,
      isGameActive: nextGameStatus
    })
  }
  isIndexShouldIncrement = (nextWordsArray, nextGameStatus) => {
    if (nextGameStatus === false) return false
    return nextWordsArray[this.state.index].isCompleted
  }
  isGameActive = (nextWordsArray) => {
    return nextWordsArray.some(element => {
      return element.isCompleted === false
    })
  }
  shouldFocusWord = (index) => {
    if (index === this.state.index && index !== this.state.scrollIndex)
      return (nodeDom) => {
        if (nodeDom) {
          console.log(nodeDom.offsetTop)
          this.setState({
            scrollIndex: this.state.scrollIndex + 1
          })
          scrollIntoView(nodeDom, {
            time: 100,
            align: {
              top: 1
            },
            isScrollable: () => true
          })

        }
      }
    return null
  }
  getCurrentTimeLeft = () => {
    const millisecondsPassed = Date.now() - this.state.startTime
    const millisecondsLeft = this.state.overallTime - millisecondsPassed
    return millisecondsToSeconds(millisecondsLeft)
  }
  numberOfCorrectWords = () => {
    return this.state.words.reduce((accumulator, currentValue) => {
      if (currentValue.isCorrect) {
        return accumulator + 1
      }
      return accumulator
    }, 0)
  }
  calculateCpm = () => {
    const millisecondsPassed = Date.now() - this.state.startTime
    const minutesPassed = millisecondsToMinutes(millisecondsPassed)
    return this.numberOfCorrectWords() / minutesPassed
  }
  renderWords = (word, index) => {
    return (
      <span>
        <Word
          displayedLetters={word.challenge.split('')}
          typedLetters={word.typed.split('')}
          key={index}
          isCompleted={word.isCompleted}
          isCorrect={word.isCorrect}
          getDomElement={this.assignRef}
          shouldFocusWord={this.shouldFocusWord(index)}
          isActive={index === this.state.index}
        />
        <span className="space">{' '}</span>
      </span>
    )
  }
  render() {
    return (
      <div className="content">
        <div>{this.state.timeLeft}</div>
        <div>{this.calculateCpm()}</div>
        <input
          value={this.getInputValue()}
          onChange={this.handleChange}
        />
        <div className="words-container">
          {this.state.words.map(this.renderWords)}
        </div>
      </div>
    );
  }
}

function createWordObject({ challenge = '', typed = '' }) {
  return {
    challenge,
    typed,
    get isCompleted() {
      return this.challenge.length === this.typed.length
    },
    get isCorrect() {
      return this.challenge === this.typed
    },
    get wordArray() {
      return this.challenge.split('')
    }
  }
}
function generateWordsArray() {
  return Array.from(new Array(100), () => {
    return randomWords()
  })
}
function generateLoremIpsum() {
  const text = generateWordsArray()
  return text
    .map((word) => {
      return createWordObject({ challenge: word })
    })
}

function secondstoMillisecond(number) {
  return number * 1000
}
function millisecondsToSeconds(number) {
  const seconds = number / 1000
  return Math.ceil(seconds)
}
function millisecondsToMinutes(number) {
  return number / 60000
}
export default App