import Question from '../components/Question'
import QuestionModel from '../model/question'


export default function Home() {

  const q = new QuestionModel(1, "melhor cor",[])
  return (
    <div style={{display:'flex', height:'100vh', alignItems:'center', justifyContent:'center' }}>
      <Question value={q}/>
    </div>
  )
}
