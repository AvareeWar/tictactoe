
//action types
const UPDATEGAMESCORE = "UPDATEGAMESCORE"
const RESETGAMESCORE = "RESETGAMESCORE"

//actions creators
export const setGame = (game) => ({type: UPDATEGAMESCORE, game})
export const resetGame = (game) => ({type: RESETGAMESCORE, game})

//intial state
const initialState = {
    game: ['X','O','X','O','X','O','X','O','X'],
}

//thunks
export const updateGameData = (game) => {
  return async (dispatch) =>{
    try{
        dispatch(setGame(game.slice(1)))
    }catch(error){
        console.log("ERROR UPDATING GAME SCORE: ", error)
    }
  }
}

export const resetGameScore = () => {
  return async (dispatch) =>{
    try{
      window.location.reload();
        dispatch(resetGame(['X','O','X','O','X','O','X','O','X']))
    }catch(error){
        console.log("ERROR UPDATING GAME SCORE: ", error)
    }
  }
}

//reducer
export default (state = initialState, action) => {
    switch (action.type) {
      case UPDATEGAMESCORE:
        return { ...state, game: action.game}
      case RESETGAMESCORE:
        return {...state, game: action.game}
      default:
        return state; //return default empty state
    }
  };

