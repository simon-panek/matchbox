//end game stats and previous games playedimport React from 'react';

import {connect} from 'react-redux';
// import {reducerFunctions} from '/reducers/'
// import {reducerFunctions} from '/reducers/'

//reducer functions go here
const mapDispatchToProps = {};

function GameOver(props){


  return(
    <section>
      <section>game over</section>
      <section>dashboard info goes here</section>
    </section>
  )
}

const mapStateToProps = state =>({
  state
})

export default connect(mapStateToProps, mapDispatchToProps)(GameOver)