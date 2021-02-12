import React, { useState } from 'react';
import './App.css';

// components
import Quiz from './Components/Quiz';
import MainMenu from './Components/MainMenu';
import EndScreen from './Components/EndScreen';
import { QuizContext } from './Helpers/Context';

function App() {
  const [gameState, setGameState] = useState("menu");
  const [score, setScore] = useState(0);

  return (
    <div className="App">
      <h2>Quiz app</h2>
      <QuizContext.Provider value={{ gameState, setGameState, score, setScore }}>
        {gameState === "menu" && <MainMenu />}
        {gameState === "quiz" && <Quiz />}
        {gameState === "end" && <EndScreen />}
      </QuizContext.Provider>
    </div>
  );
}

export default App;
