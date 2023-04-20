
import questions from '../bdQuestions'

export default (req:any, res:any) => {

  const id = +req.query.id

  //filtrar para pegar somente a questao pedida no array
  const selectedQuestion = questions.filter(question => question.id === id)

  if(selectedQuestion.length === 0){
    return res.status(204).send()
  }
  res.status(200).json(selectedQuestion[0].shuffleAnswers().toObject())
}