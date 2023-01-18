import { useState } from 'react'
import { useContext } from 'react'
import { useEffect } from 'react'
import { QuizContext } from './context/quiz'

import './App.css'
import Welcome from './components/Welcome'
import Question from './components/Question'
import GameOver from './components/GameOver'

function App() {
  const [quizState, dispatch] = useContext(QuizContext);

  useEffect(()=> {
    dispatch({type: "REORDER_QUESTION"})
  }, []);
  

  return (
    <div className="App">
      <h1> Quiz app</h1>
      {quizState.gameStage === 'Start' && <Welcome/>}
      {quizState.gameStage === 'Playing' && <Question/>}
      {quizState.gameStage === 'End' && <GameOver/>}
    </div>
  )
}

export default App
