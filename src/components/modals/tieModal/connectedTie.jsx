import { connect } from "react-redux";
import TieModal from "./TieModal";
import {resetGameScore} from '../../../store/gameScore/gameScore'

const mdtp = (dispatch) => ({
  resetGameScore(){
    dispatch(resetGameScore())
  }
})

export default connect(null, mdtp)(TieModal);