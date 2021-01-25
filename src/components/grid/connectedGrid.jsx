import { connect } from "react-redux";
import Grid from "./Grid";
import {updateGameData} from '../../store/gameScore/gameScore'
import {assignWinner} from '../../store/winner/winner'

const mstp = (state) => ({
  game: state.game,
  winner: state.winner
});

const mdtp = (dispatch) => ({
    updateGameData(game){
      dispatch(updateGameData(game))
    },
    assignWinner(winner){
      dispatch(assignWinner(winner))
    }
})

export default connect(mstp,mdtp)(Grid);