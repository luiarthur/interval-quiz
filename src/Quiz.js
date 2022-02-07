import React from 'react';
import NextBtn from './NextBtn.js'
import QuizValue from './QuizValue.js'

class Note {
  constructor(letter, acc) {
    this.letter = letter
    this.acc = acc
    this.value = this.letter + this.acc
  }

  plus(interval) {
    interval.value === "M7" && (interval = new Interval(7, ""))

    let currentPos = indexOfLetterNameWithAcc(this.value)
    let newPos = currentPos + semitones[interval.degree]
    interval.acc === "#" && (newPos += 1)
    interval.acc === "b" && (newPos -= 1)
    while (newPos >= letterNamesWithAcc.length) {
      newPos -= 12
    }

    let newNote = randomChoice(letterNamesWithAcc[newPos])
    switch (newNote) {
      case "#":
        return new Note(newNote.slice(0, -1), "#")
      case "b":
        return new Note(newNote.slice(0, -1), "")
      default:
        return new Note(newNote, "")
    }
  }
}

class Interval {
  constructor(degree, acc) {
    this.degree = degree
    this.acc = acc
    this.value = this.acc + this.degree
  }
}

// Semitones between intervals
const semitones = {3: 4, 5: 7, 7: 11, 9: 14, 11: 17, 13: 21}

const letterName = ['C', 'D', 'E', 'F', 'G', 'A', 'B']
const accidentals = ["#", "b", ""]
const letterNamesWithAcc = [
  ['C'],
  ['C#', 'Db'],
  ['D'],
  ['D#', 'Eb'],
  ['E'],
  ['F'],
  ['F#', 'Gb'],
  ['G'],
  ['G#', 'Ab'],
  ['A'],
  ['A#', 'Bb'],
  ['B']
]

function indexOfLetterNameWithAcc(x) {
  let idx = 0
  for (const lnwa of letterNamesWithAcc) {
    if (lnwa.indexOf(x) > -1) {
      return idx
    }
    idx += 1
  }
}

function randomChoice(array) {
  return array[Math.floor(Math.random() * array.length)]
}

const badEnharmonic = new Set(["Cb", "E#", "Fb", "B#"])

function randomNote() {
  const note = new Note(randomChoice(letterName), randomChoice(accidentals))
  if (badEnharmonic.has(note.value)) {
    return randomNote()
  } else {
    return note
  }
}

const intervals = [
  new Interval(3, "b"), new Interval(3, ""),
  new Interval(5, "b"), new Interval(5, ""), new Interval(5, "#"),
  new Interval(7, "b"), new Interval(7, "M"),
  new Interval(9, "b"), new Interval(9, ""), new Interval(9, "#"),
  new Interval(11, ""), new Interval(11, "#"),
  new Interval(13, "b"), new Interval(13, ""),
]
function randomInterval() {
  return randomChoice(intervals)
}

export default class Quiz extends React.Component {
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
        <NextBtn onClick={this.generateRandomValues}/>
      </div>
    )
  }
}
