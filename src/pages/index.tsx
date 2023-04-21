import { useEffect, useRef, useState } from 'react'
import Question from '../components/Question'
import QuestionModel from '../model/question'
import AnswerModel from '../model/answer'
import Button from '../components/Button'


const q = new QuestionModel(306, 'Qual bicho transmite a Doença de Chagas?', [
  AnswerModel.wrong('Abelha'),
  AnswerModel.wrong('Barata'),
  AnswerModel.wrong('Pulga'),
  AnswerModel.correct('Barbeiro')])

export default function Home() {
  const [question, setQuestion] = useState(q)
  const questionRef = useRef<QuestionModel>()

  useEffect(()=>{
    questionRef.current = question
  },[question])

  const onResponse = (index: number)=>{
    setQuestion(question.replyWith(index))
  }
  const onTimerComplete = ()=>{
    if(questionRef.current?.notAnswered){
      setQuestion(questionRef.current.replyWith(-1))

    }
  }
  
  return (
    <div style={{display:'flex', height:'100vh', alignItems:'center', justifyContent:'center', flexDirection:'column' }}>
      <Question value={question} 
                timeToResponse={10}
                onResponse={onResponse} 
                onTimerComplete={onTimerComplete}/>
                <Button text='Próxima'/>
    </div>
  )
}
