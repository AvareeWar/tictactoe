
//action types
const GETWINNER = "GETWINNER"
const SETWINNER = "SETWINNER"

//actions creators
export const getWinner = (winner) => ({type: GETWINNER, winner})
export const setWinner = (winner) => ({type: SETWINNER, winner})

//intial state
const initialState = {
    winner: "",
}

//thunks
export const fetchWinner = () => {
  return async (dispatch) =>{
    try{
        dispatch(getWinner())
    }catch(error){
        console.log("ERROR UPDATING GAME SCORE: ", error)
    }
  }
}

export const assignWinner = (winner) => {
    return async (dispatch) =>{
      try{
          dispatch(setWinner(winner))
      }catch(error){
          console.log("ERROR UPDATING GAME SCORE: ", error)
      }
    }
  }

//reducer
export default (state = initialState, action) => {
    switch (action.type) {
      case GETWINNER:
        return { ...state, winner: action.winner}
      case SETWINNER:
        return {...state, winner: action.winner}
      default:
        return state; //return default empty state
    }
  };

