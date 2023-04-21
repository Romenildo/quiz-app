
import styles from '../styles/Statistic.module.css'


interface StatisticProps{
    value: any
    text: string
    backgroundColor?: string
    textColor?: string
}

export default function Statistic (props:StatisticProps) {

    return (
        <div className={styles.statistic}>
            <div className={styles.value} style={
                {backgroundColor:props.backgroundColor ?? '#fdd60f',
                 color: props.textColor ?? '#333'
            }}>
                {props.value}
            </div>
            <div className={styles.text}>
                {props.text}
            </div>  
        </div>
    )
}