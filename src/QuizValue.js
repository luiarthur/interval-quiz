import { useState } from 'react';

export function QuizValue(props) {
  const [hidden, setHidden] = useState(false)

  const toggleHide = () => setHidden(!hidden)

  return (
    <i className="QuizValue" onClick={toggleHide}>
      {hidden ? " ___ " : props.value}
    </i>
  )  
}
