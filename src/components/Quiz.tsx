import QuestionModel from '../model/question'
import styles from '../styles/Quiz.module.css'
import Button from './Button'
import Question from './Question'

interface QuizProps {
    question: QuestionModel
    last: boolean
    questionAnswered: (question: QuestionModel) => void
    goToNextStep: () => void
}

export default function Quiz(props: QuizProps){

    const availableAnswer = (index: number) =>{
        if(props.question.notAnswered){
            props.questionAnswered(props.question.replyWith(index))
        }
    }

    return(
        <div className={styles.quiz}>
            {props.question ? (
                <Question 
                value={props.question}
                timeToResponse={6}
                onResponse = {availableAnswer}
                onTimerComplete={props.goToNextStep}
                />
            ):(false)}
            
            <Button 
                onClick={props.goToNextStep} 
                text={props.last ? 'Finalizar': 'Próxima'}/>
        </div>
    )
}