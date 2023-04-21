import Button from "../components/Button"
import Statistic from "../components/Statistic"
import styles from "../styles/Result.module.css"

import { useRouter } from "next/router"

export default function result(){

    const router = useRouter()

    const total = +(router.query.total ?? 0)
    const corrects = +(router.query.corrects ?? 0)
    const percentage = Math.round((corrects/total)*100)
    return(
        <div className={styles.result}>
            <h1>Resultado Final</h1>
            <div style={{display:'flex'}}>
                <Statistic 
                    text="Perguntas"
                    value={total}
                />
                <Statistic 
                    text="Certas"
                    value={corrects}
                    backgroundColor="#9cd2a4"
                />
                <Statistic 
                    text="Percentual"
                    value={`${percentage}%`}
                    backgroundColor="#de6a33"
                />
            </div>
            <Button href="/" text="Tentar Novamente" />
            
        </div>
    )
}