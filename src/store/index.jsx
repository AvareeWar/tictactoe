import axios from "axios";
import game from './gameScore'
import winner from './winner'
import { composeWithDevTools } from "redux-devtools-extension";
import { combineReducers } from "redux";
import { createStore, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
let middleware = [thunkMiddleware.withExtraArgument({ axios })];

const appReducer = combineReducers({
  game,
  winner
})

const store = createStore(
    appReducer,
    composeWithDevTools(applyMiddleware(...middleware))
  );
  
  export default store;