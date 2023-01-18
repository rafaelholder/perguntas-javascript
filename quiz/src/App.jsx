import { useState } from 'react'
import { useContext } from 'react'


import { QuizContext } from './context/quiz'
import Question from './components/Question'
import './App.css'
import Welcome from './components/Welcome'

function App() {
  const [quizState, dispatch] = useContext(QuizContext);
  

  return (
    <div className="App">
      <h1> Quiz app</h1>
      {quizState.gameStage === 'Start' && <Welcome/>}
      {quizState.gameStage === 'Playing' && <Question/>}
    </div>
  )
}

export default App
