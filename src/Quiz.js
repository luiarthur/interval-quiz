import React from 'react';
import { NextBtn } from './NextBtn.js'
import { QuizValue } from './QuizValue.js'
import { randomNote, randomInterval } from './music.js'

export class Quiz extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      x: "___",
      y: "___",
      interval: "___",
    }

  }

  generateRandomValues = () => {
    // Random note.
    const y = randomNote()

    // Random interval.
    const interval = randomInterval()

    // The other note.
    const x = y.plus(interval)

    this.setState({
      x: x.value,
      y: y.value,
      interval: interval.value
    })
  }

  render() {
    return (
      <div className="Quiz">
        <QuizValue value={this.state.x + " "} />
        is the
        <QuizValue value={" " + this.state.interval + " "} />
        of
        <QuizValue value={" " + this.state.y} />.
        <br/>
        <br/>
        <NextBtn onClick={this.generateRandomValues}/>
      </div>
    )
  }
}
