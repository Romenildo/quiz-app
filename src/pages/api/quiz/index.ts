
import questions from "../bdQuestions"
import { shuffle } from "../../../functions/array"

export default (req:any, res:any)=>{

    const ids = questions.map(question => question.id)//pega os id das questoes para embaralhar

    res.status(200).json(shuffle(ids))
}