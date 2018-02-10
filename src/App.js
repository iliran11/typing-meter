import React, { Component } from 'react';
import Word from './components/Word.jsx'
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
    // setInterval(() => {
    //   this.setState({
    //     timeLeft: this.getCurrentTimeLeft()
    //   })
    // }, 1000)

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
    /** useful when incrementing the index with a space - and then the space will not be counted as a typed character. */
    const newInputValue = event.target.value.trim()
    const nextWordsArray = this.state.words.map((element, index) => {
      /** update the current active word with the typed value.*/
      if (index === this.state.index) {
        return new createWordObject({
          challenge: element.challenge,
          typed: newInputValue
        })
      }
      return element
    })
    const nextGameStatus = this.isGameActive(nextWordsArray)
    this.setState({
      words: nextWordsArray,
      isGameActive: nextGameStatus
    })
  }
  onKeyPressed = (event) => {
    const { words, index,scrollIndex } = this.state;
    const currentWord = words[index];
    switch (event.which) {
      case 8:
        /** backspace clicked */
        if (currentWord.isEmpty) {
          this.setState({
            index: index - 1,
            scrollIndex: scrollIndex - 1
          })
        }
        break;
      case 32:
        /** space clicked - if the typing of the word is compelted - move on. */
        if (currentWord.isCompleted) {
          this.setState({
            index: index + 1,
            scrollIndex: scrollIndex + 1
          })
        }
        break;
      default:
    }
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
      <span key={index}>
        <Word
          displayedLetters={word.challenge.split('')}
          typedLetters={word.typed.split('')}
          key={index}
          isCompleted={word.isCompleted}
          isCorrect={word.isCorrect}
          getDomElement={this.assignRef}
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
          onKeyPress={this.handleKeyPress}
          onKeyDown={this.onKeyPressed}
          tabIndex="0"

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
      const { challenge, typed } = this
      return challenge.length <= typed.length
    },
    get isEmpty() {
      const { typed } = this;
      const trimmedTyped = typed.trim();
      return trimmedTyped.length === 0
    },
    get isCorrect() {
      const {challenge,typed} = this
      const relevantTyped = typed.substr(0,challenge.length)
      return challenge === relevantTyped
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