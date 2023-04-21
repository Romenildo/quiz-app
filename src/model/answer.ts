export default class AnswerModel {

    /** Variaveis com # quer dizer que elas sao privadas(private id: number) então so podem ser acessadas atraves dos getters e setters */
    #value: string
    #correct: boolean
    #clicked: boolean
    //#answered boolean

    constructor(value:string, correct:boolean, clicked = false){
        this.#value = value
        this.#correct = correct
        this.#clicked = clicked
    }

    static correct(value: string){
        return new AnswerModel(value, true)
    }

    static wrong(value: string){
        return new AnswerModel(value, false)

    }


    get value(){
        return this.#value
    }
    get correct(){
        return this.#correct
    }
    get clicked(){
        return this.#clicked
    }

    toReveal(){
        return new AnswerModel(this.#value, this.#correct, true)
    }

    // pode chamar diretamento do Answer.Model.metodoStatic
    //nos demais precisa primeiro cirar uma nova instancia new Resposta, para ai sim usar resp.metodoDeInstancia
    static fromObject(obj: AnswerModel): AnswerModel{
        return new AnswerModel(obj.value, obj.correct, obj.clicked)
    }

    toObject(){
        return {
            value: this.#value,
            correct: this.#clicked,
            clicked: this.#clicked
        }
    }

}