import { shuffle } from "../functions/array"
import AnswerModel from "./answer"

export default class QuestionModel {

    /** Variaveis com # quer dizer que elas sao privadas(private id: number) então so podem ser acessadas atraves dos getters e setters */
    #id: number
    #statement: string
    #answers: AnswerModel[]
    #hit: boolean

    constructor(id: number, statement:string, answers:AnswerModel[], hit = false){
        this.#id = id
        this.#statement = statement
        this.#answers = answers
        this.#hit = hit
    }

    get id(){
        return this.#id
    }
    get statement(){
        return this.#statement
    }
    get answers(){
        return this.#answers
    }
    get hit(){
        return this.#hit
    }

    get notAnswered() {
        return !this.answered
    }
    
    get answered(){
        for(let answer of this.#answers){
            if(answer.clicked) return true
        }
        return false
    }

    replyWith(index: number):QuestionModel{
        const hit = this.#answers[index]?.clicked
        const answers = this.#answers.map((res, i)=>{
            const selectedAnswerd = index === i
            const mustReveal = selectedAnswerd || res.correct
            return mustReveal ? res.toReveal(): res
        })

        return new QuestionModel(this.#id, this.#statement, answers, hit)
    }

    shuffleAnswers():QuestionModel{
        return new QuestionModel(
            this.#id,
            this.#statement,
            shuffle(this.#answers),
            this.#hit
        )
    }

    // pode chamar diretamento do Answer.Model.metodoStatic
    //nos demais precisa primeiro cirar uma nova instancia new Resposta, para ai sim usar resp.metodoDeInstancia
    static fromObject(obj: QuestionModel): QuestionModel{
        //percorrendo a lista de respostas e criando um alista de respostas model
        const answers = obj.answers.map(resp=> AnswerModel.fromObject(resp))
        return new QuestionModel(obj.id, obj.statement, answers, obj.hit)
    }

    toObject(){
        return {
            id: this.#id,
            statement: this.#statement,
            hit: this.#hit,
            answered: this.answered,
            answers: this.#answers.map(ans => ans.toObject()),
            
        }
    }
}