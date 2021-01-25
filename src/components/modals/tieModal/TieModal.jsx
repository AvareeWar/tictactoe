import React, {useEffect} from 'react'
import styles from '../modalStyles.module.scss'

export const TieModal = (props) => {
    useEffect(()=>{}, [props.winner])
    return(
        <div id={styles.tieModal}>
            <h1>{"TIE GAME!"}</h1>
            <button onClick={()=>{props.resetGameScore()}}>RESET GAME</button>
        </div>
    )
}

export default TieModal;