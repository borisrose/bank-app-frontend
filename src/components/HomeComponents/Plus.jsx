import { useEffect } from "react"
import styles from "./Plus.module.scss"

const Plus = ({p}) => {

 

    return(

        <article className={styles.container}>

            <div className={styles.ImageContainer}>

                <img src={p.image} alt=""/>
            </div>

            <div className={styles.TextContainer}>
                <h3>{p.title}</h3>
                <p>{p.description}</p>
            </div>

        </article>


    )



}

export default Plus