import React from 'react';

export default class QuizValue extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      hidden: false
    }
  }

  toggleHide = () => {
    this.setState({hidden: !this.state.hidden})
  }

  render() {
    return (
      <i className="QuizValue" onClick={this.toggleHide}>
        {this.state.hidden ? " ___ " : this.props.value}
      </i>
    )  
  }
}
