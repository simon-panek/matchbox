//gameboard

import React, {useEffect} from 'react';
import {connect} from 'react-redux';
// import {reducerFunctions} from '/reducers/'
// import {reducerFunctions} from '/reducers/'

//reducer functions go here
const mapDispatchToProps = {};

function MatchBoard(props){

  

  const tileSelector=(tileData)=>{
    // (if) first selection ? send call to start timer and flip card : (else) flip card
    // (if) faceup === true ? do not increment counter : (else) increment counter
    // (if) 2 selections are not the same ? flip them back : (else) leave them flipped (and change color?)
    // (if) game is over ? clickCounter/2, stop timer, send to game-over : (else) continue

    props.gameStateFunction(tileData)
  }


  return(
    <section >
      <dashboard />

      <section id="gameboard">
        {props.gameboardState.map((tileData, index)=>(

          <section key={index} id="gameboard-cell-parent">

            <section onClick={()=>tileSelector(tileData)} id="gameboard-cell"><img src={props.image}></img>cell</section>
              
          </section>
        ))}

      </section>
    </section>
  )
}

const mapStateToProps = state =>({
  state,
  gameboardImages: state.currentBoard
  // gameboardState: state.gameStateCombinedReducersFromIndex.
})

export default connect(mapStateToProps, mapDispatchToProps)(MatchBoard)

              // <section onClick={()=>tileSelector(tileData)}>2</section>
              // <section onClick={()=>tileSelector(tileData)}>3</section>
              // <section onClick={()=>tileSelector(tileData)}>4</section>
              // <section onClick={()=>tileSelector(tileData)}>5</section>
              // <section onClick={()=>tileSelector(tileData)}>6</section>
              // <section onClick={()=>tileSelector(tileData)}>7</section>
              // <section onClick={()=>tileSelector(tileData)}>8</section>

              // <section onClick={()=>tileSelector(tileData)}>9</section>
              // <section onClick={()=>tileSelector(tileData)}>10</section>
              // <section onClick={()=>tileSelector(tileData)}>11</section>
              // <section onClick={()=>tileSelector(tileData)}>12</section>
              // <section onClick={()=>tileSelector(tileData)}>13</section>
              // <section onClick={()=>tileSelector(tileData)}>14</section>
              // <section onClick={()=>tileSelector(tileData)}>15</section>
              // <section onClick={()=>tileSelector(tileData)}>16</section>