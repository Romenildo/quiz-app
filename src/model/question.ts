import AnswerModel from "./answer"

export default class QuestionModel {

    /** Variaveis com # quer dizer que elas sao privadas(private id: number) então so podem ser acessadas atraves dos getters e setters */
    #id: number
    #statement: string
    #answers: AnswerModel[]
    #hit: boolean

    constructor(id: number, statement:string, answers:AnswerModel[], hit:boolean){
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

    get answered(){
        for(let answer of this.#answers){
            if(answer.clicked) return true
        }
        return false
    }
}