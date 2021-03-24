//gameboard

import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {newGame, flipCard} from '../reducers/game-state'
// import {reducerFunctions} from '/reducers/'
// import hardImage from '../assets/'

//reducer functions go here
const mapDispatchToProps = {newGame, flipCard};

function MatchBoard(props){
  console.log('props from Matchboard', props)

  useEffect(()=>{
    props.newGame();
  }, []);

  const tileSelector=(cardID)=>{
    // console.log({cardID});
    // (if) first selection ? send call to start timer and flip card : (else) flip card
    // (if) faceup === true ? do not increment counter : (else) increment counter
    // (if) 2 selections are not the same ? flip them back : (else) leave them flipped (and change color?)
    // (if) game is over ? clickCounter/2, stop timer, send to game-over : (else) continue

    props.flipCard(cardID)
  }

  return(
    <section >
      <section>Proof of Life</section>
      <section id="gameboard">
        {props.gameboardState.map((tileData, index)=>(
          <section key={index} id="gameboard-cell-parent">
            <section onClick={()=>tileSelector(tileData)} id="gameboard-cell">
              <img src={tileData.cardPath} alt="match-images"/>
            </section>
          </section>
        ))}

      </section>
    </section>
  )
}

const mapStateToProps = state =>({
  state,
  // gameboardImages: state.gameState,
  gameboardState: state.gameState.currentBoard
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