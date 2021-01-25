import React, {useEffect} from 'react'
import styles from './tileStyles.module.scss'

export const Tile = (props) =>{

    useEffect(()=>{
    },[props.insignia])

    const setTileColor = () => {
        return props.insignia === "X" ? styles.tileX : (props.insignia === "O" ? styles.tileO : styles.tile)
    }

    return (
        <div className={setTileColor()} onClick={()=>{props.setTile()}}
        >
            <p className={styles.tileText}>{props.insignia}</p>
        </div>
    )


}

export default Tile