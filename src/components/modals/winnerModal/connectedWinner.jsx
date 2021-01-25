import { connect } from "react-redux";
import WinnerModal from "./WinnerModal";
import {resetGameScore} from '../../../store/gameScore/gameScore'

const mstp = (state) => ({
  winner: state.winner
});

const mdtp = (dispatch) => ({
  resetGameScore(){
    dispatch(resetGameScore())
  }
})

export default connect(mstp, mdtp)(WinnerModal);