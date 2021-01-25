import React, {useEffect} from 'react'
import styles from '../modalStyles.module.scss'

export const WinnerModal = (props) => {
    useEffect(()=>{}, [props.winner])
    return(
        <div id={styles.winnerModal}>
            <h1>{props.winner.winner + " WINS!!!"}</h1>
            <button onClick={()=>{props.resetGameScore()}}>RESET GAME</button>
        </div>
    )
}

export default WinnerModal