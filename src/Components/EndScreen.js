import React, { useContext } from 'react';
import { QuizContext } from '../Helpers/Context';
import { Questions } from '../Helpers/QuestionBank';
import '../App.css';

function EndScreen() {
  const { score, setScore, setGameState } = useContext(QuizContext);

  const restartQuiz = () => {
    setScore(0);
    setGameState("menu");
  }

  return (
    <div className="end">
      <h1>Quiz Result Score</h1>
      <h3> {score} / {Questions.length} </h3>
      <button onClick={restartQuiz}>Restart QuizGame</button>
    </div>
  )
}

export default EndScreen;
