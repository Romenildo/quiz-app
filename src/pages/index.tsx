import { useState } from 'react'
import Question from '../components/Question'
import QuestionModel from '../model/question'
import AnswerModel from '../model/answer'


const q = new QuestionModel(306, 'Qual bicho transmite a Doença de Chagas?', [
  AnswerModel.wrong('Abelha'),
  AnswerModel.wrong('Barata'),
  AnswerModel.wrong('Pulga'),
  AnswerModel.correct('Barbeiro')])

export default function Home() {
  const [question, setQuestion] = useState(q)

  const onResponse = (index: number)=>{
    setQuestion(question.replyWith(index))
  }
  const onTimerComplete = ()=>{
    if(question.notAnswered){
      setQuestion(question.replyWith(-1))

    }
  }
  
  return (
    <div style={{display:'flex', height:'100vh', alignItems:'center', justifyContent:'center' }}>
      <Question value={question} onResponse={onResponse} onTimerComplete={onTimerComplete}/>
    </div>
  )
}
