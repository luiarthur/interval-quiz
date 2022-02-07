import React from 'react';
import NextBtn from './NextBtn.js'

class Quiz extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      question: "Placeholder"
    }
  }

  render() {
    return (
      <div className="Quiz">
        { this.state.question }
        <br/>
        <NextBtn/>
      </div>
    )
  }
}

export default Quiz
