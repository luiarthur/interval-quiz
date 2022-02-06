import logo from './logo.svg';
import './App.css';
import Quiz from './Quiz.js';

function App() {
  return (
    <div className="App">
      <Quiz question_text={`This is question ${1+1} text.`} />
    </div>
  );
}

export default App;
