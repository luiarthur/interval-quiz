import { useState } from 'react';
import { NextBtn } from './NextBtn.js'
import { QuizValue } from './QuizValue.js'
import { randomNote, randomInterval } from './music.js'

export function Quiz() {
  const [state, setState] = useState({
    x: "___",
    y: "___",
    interval: "___",
  })

  const generateRandomValues = () => {
    // Random note.
    const y = randomNote()

    // Random interval.
    const interval = randomInterval()

    // The other note.
    const x = y.plus(interval)

    setState({
      x: x.value,
      y: y.value,
      interval: interval.value
    })
  }

  return (
    <div className="Quiz">
      <QuizValue value={state.x + " "} />
      is the
      <QuizValue value={" " + state.interval + " "} />
      of
      <QuizValue value={" " + state.y} />.
      <br/>
      <br/>
      <NextBtn onClick={generateRandomValues}/>
    </div>
  )
}
