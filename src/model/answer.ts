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

    get value(){
        return this.#value
    }
    get correct(){
        return this.#correct
    }
    get clicked(){
        return this.#clicked
    }

}