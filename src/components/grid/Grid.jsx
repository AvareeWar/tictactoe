import React, {useEffect, useState} from "react"
import styles from './gridStyles.module.scss'
import Tile from './tile'
import WinnerModal from '../modals/winnerModal'
import TieModal from '../modals/tieModal'

function generateTiles(){
    let generatedTiles = []
    for(let i = 0; i < 9 ; i++){
        generatedTiles.push({id: i, insignia: ""})
    }
    return generatedTiles
}

export const Grid = (props) => {
    const [mount, setMount] = useState(false)
    const [tiles, setTiles] = useState([])
    const [gameOver, setGameOver] = useState(false)

    useEffect(()=>{
       if(tiles.length === 0){
        setTiles(generateTiles())
       } 
       if(mount){
        computeGame(tiles)
       }
       setMount(true)
    },[props.game.game])

    const setTile = (tileIndex) =>{
        if(tiles[tileIndex].insignia){
            alert("THIS TILE HAS ALREADY BEEN SET")
        }
        else{
            tiles[tileIndex].insignia = props.game.game[0]
            setTiles(tiles)
            props.updateGameData(props.game.game)
        }
    }
    
    const computeGame = (game) => {
        let user = ""
        for(let i = 0; i < game.length; i++){
            if(game[i].insignia){
                if(i % 3 === 0){ //check rows
                    if(game[i].insignia === game[i+1].insignia && game[i+1].insignia===game[i+2].insignia){
                        user = game[i].insignia
                        console.log(`ROW FORMED: ${user} WINS!`)
                    }
                }
                if(i <= 2){ //check columns
                    if(game[i].insignia === game[i+3].insignia && game[i+3].insignia === game[i+6].insignia){
                        user = game[i].insignia
                        console.log(`COLUMN FORMED: ${user} WINS!`)

                    }
                }
                if(i === 0 || i === 2){ //check diagonals
                    if((i === 0 && (game[i].insignia === game[i+4].insignia && game[i+4].insignia === game[i+8].insignia)) || (i === 2 && (game[i].insignia === game[i+2].insignia && game[i+2].insignia === game[i+4].insignia))){
                        user = game[i].insignia
                        console.log(`DIAGONAL FORMED: ${user} WINS!`)

                    }
                }
            }
            if(user){
                props.assignWinner(user)
                setGameOver(true)
            }
        }
        if(!user && props.game.game.length === 0){
            props.assignWinner("TIE")
            setGameOver(true)
        }
    }

    return (
        <React.Fragment>
            <div id={styles.modal}>
                {props.winner.winner ? (props.winner.winner !== "TIE" ? <WinnerModal winner={props.winner.winner}/>: <TieModal/> ): null}
            </div>
            <div id={styles.grid} style={gameOver ? {pointerEvents:"none"} : null}>
                {tiles.map(tile=>{
                    return <Tile key={tile.id} id={tile.id} insignia={tile.insignia} setTile={()=>{setTile(tile.id)}}/>
                })}
            </div>
        </React.Fragment>
    )
}

export default Grid