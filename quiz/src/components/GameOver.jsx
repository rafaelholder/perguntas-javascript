import { useContext} from 'react'
import { QuizContext } from '../context/quiz'


import WellDone from '../img/welldone.svg'
import './GameOver.css'

const GameOver = () => {
    const [quizState, dispatch] = useContext(QuizContext);

  return (
    <div id='gameover'>
        <h2> FIM DE JOGO!</h2>
        <p> Pontuação: {quizState.score}</p>
        <p> Acertou {quizState.score} de {quizState.questions.length} perguntas.</p>
        <img src={WellDone} alt='Fim do Quiz' />
        <button onClick={() => dispatch({type: "RE_RUN"})} >
            Reinicar
        </button>
    </div>
  )
}

export default GameOver