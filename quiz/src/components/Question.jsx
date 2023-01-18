import { useContext, React } from 'react';
import { QuizContext } from '../context/quiz';

import './Question.css';
import Option from './Options.jsx';

const Question = () => {
    const [quizState, dispatch] = useContext(QuizContext);
    const currentQuestion = quizState.questions[quizState.currentQuestion];

    const onSelectOption = (option) => {
      dispatch({
        type: "CHECK_ANSWER", 
        payload: {answer: currentQuestion.answer, option}
      })
    };
    
    
    
  return (
    <div id='question'>
        <p> Pergunta {quizState.currentQuestion + 1} de {quizState.questions.length}</p>
        <h2>{currentQuestion.question}</h2>
        <div id='options-container'>
            <p>{currentQuestion.options.map((option) => (
              <Option 
              option={option} 
              key ={option} 
              answer={currentQuestion.answer} 
              selectOption={() => onSelectOption(option)}
              />
            ))}</p>

        </div>
        {quizState.answerSelected && (
          <button onClick={() => dispatch({type: "CHANGE_QUESTION"})}>
          Continuar
        </button>
        )}
    </div>
  )
}

export default Question