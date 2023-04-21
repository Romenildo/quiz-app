import { useEffect, useRef, useState } from 'react'
import QuestionModel from '../model/question'
import Quiz from '../components/Quiz'

import { useRouter } from 'next/router'

const BASE_URL = 'http://localhost:3000/api'

export default function Home() {

  const router = useRouter()
  const [questionsId, setQuestionsId] = useState<number[]>([])
  const [question, setQuestion] = useState<QuestionModel>(new QuestionModel(0,"",[]))
  const [contCorrectAnswer, setContCorrectAnswer] = useState<number>(0)


  async function loadingQuestionsIds(){
    const resp = await fetch(`${BASE_URL}/quiz`)
    const ids = await resp.json()
    setQuestionsId(ids)
  }
  async function loadingQuestion(idQuestion: number){
    const resp = await fetch(`${BASE_URL}/questions/${idQuestion}`)
    const json = await resp.json()
    const newQuestion = QuestionModel.fromObject(json)
    setQuestion(newQuestion)
  }

  //ao executar algo que ira executaqr ao iniciar o componente
  useEffect(()=>{
    loadingQuestionsIds()
  },[])
  useEffect(()=>{
    questionsId.length > 0 && loadingQuestion(questionsId[0])
  },[questionsId])


  const questionAnswered = (questionAnswered: QuestionModel)=> {
    setQuestion(questionAnswered)
    const correct = questionAnswered.hit
    setContCorrectAnswer(contCorrectAnswer + (correct ? 1 : 0))
  }

  const idNextQuestion = () =>{
    const nextIndex = questionsId.indexOf(question.id) + 1
    return questionsId[nextIndex]
    
    
  }
  const gotoNextStep = () => {
    const nextId = idNextQuestion()
    nextId ? gotoNextQuestion(nextId): finalize()
  }
  
  const gotoNextQuestion = (nextId: number)=>{
    loadingQuestion(nextId)
  }
  const finalize = () =>{
    router.push({
      pathname:"/result",
      query:{
        total: questionsId.length,
        corrects: contCorrectAnswer
      }
    })
  }
  
  return (
    <>
      {question ? (
        <Quiz 
            question={question}
            last={idNextQuestion() === undefined}
            questionAnswered={questionAnswered}
            goToNextStep={gotoNextStep}
        />
      ):(false)}
    </>
      
  )
}
