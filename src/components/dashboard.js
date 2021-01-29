//timer, moves, reset

import {connect} from 'react-redux';
import { refresh } from '../reducers/dashboard-reducer';
// import {reducerFunctions} from '/reducers/'

//reducer functions go here
const mapDispatchToProps = { refresh };

function Dashboard(props){

  const refreshFunction = ()=>{
    props.refresh();
  }

  return(
    <section>
      <div className="timer">Timer</div>
      <div className="game-moves">Number of Moves: {props.gameMoves / 2}</div>
      <div className="refresh-icon" onClick={refreshFunction()}>Refresh icon</div>
    </section>
  )
}

const mapStateToProps = state =>({
  state,
  gameMoves: state.gameState,
})

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
