import './App.css';
import Grid from './components/grid'
import {Provider} from 'react-redux'
import store from './store'

function App() {
  return (
    <Provider store={store}> 
      <div id="App">
        <div id="introHolder">
            <h1>Welcome to Avaree's TicTacToe! Click on a tile to start</h1>
        </div>
        <div id="gameHolder">
            <Grid/>
        </div>
      </div>
    </Provider>
  );
}



export default App;
