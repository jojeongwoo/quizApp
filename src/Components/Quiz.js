import React, { useState, useContext } from 'react';
import { QuizContext } from '../Helpers/Context';
import { Questions } from '../Helpers/QuestionBank';

function Quiz() {
  const { score ,setScore, gameState, setGameState  } = useContext(QuizContext);

  const [currentQuiz, setCurrentQuiz] = useState(0);
  const [optionChosen, setOptionChosen] = useState("");

  const nextQuiz = () => {
    if(Questions[currentQuiz].answer == optionChosen) {
      setScore(score + 1);
    }
    setCurrentQuiz(currentQuiz + 1);
  };

  const finishQuiz = () => {
    if(Questions[currentQuiz].answer == optionChosen) {
      setScore(score + 1);
    }
    setGameState("end");
  }

  return (
    <div className="Quiz">
      <h1>{Questions[currentQuiz].prompt}</h1>
      <div className="options">
        <button onClick={() => setOptionChosen("A")}>{Questions[currentQuiz].optionA}</button>
        <button onClick={() => setOptionChosen("B")}>{Questions[currentQuiz].optionB}</button>
        <button onClick={() => setOptionChosen("C")}>{Questions[currentQuiz].optionC}</button>
        <button onClick={() => setOptionChosen("D")}>{Questions[currentQuiz].optionD}</button>
      </div>

      {currentQuiz == Questions.length - 1 ? (
        <button onClick={finishQuiz}>Finish Quiz</button>
      ) : (
        <button onClick={nextQuiz}>Next Quiz</button>
      )}
    </div>
  )
}

export default Quiz;
