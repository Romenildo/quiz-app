import { useEffect, useRef, useState } from 'react'
import Question from '../components/Question'
import QuestionModel from '../model/question'
import AnswerModel from '../model/answer'
import Button from '../components/Button'
import Quiz from '../components/Quiz'


const q = new QuestionModel(306, 'Qual bicho transmite a Doença de Chagas?', [
  AnswerModel.wrong('Abelha'),
  AnswerModel.wrong('Barata'),
  AnswerModel.wrong('Pulga'),
  AnswerModel.correct('Barbeiro')])

export default function Home() {
  const [question, setQuestion] = useState(q)

  const questionAnswered = (question: QuestionModel)=> {

  }
  const gotoNextStep = () => {

  }
  
  
  return (
    <div style={{display:'flex', height:'100vh', alignItems:'center', justifyContent:'center', flexDirection:'column' }}>
      <Quiz 
          question={question}
          last={true}
          questionAnswered={questionAnswered}
          goToNextStep={gotoNextStep}
      />
    </div>
  )
}
