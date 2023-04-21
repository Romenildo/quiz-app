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
            <div>{total}</div>
            <div>{corrects}</div>
            <div>{`${percentage}%`}</div>
        </div>
    )
}