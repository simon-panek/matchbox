//gameboard

import React from 'react';
import {connect} from 'react-redux';
// import {reducerFunctions} from '/reducers/'
// import {reducerFunctions} from '/reducers/'

//reducer functions go here
const mapDispatchToProps = {};

function MatchBoard(props){


  return(
    <section>
      <dashboard />
      <section>gameboard goes here</section>
    </section>
  )
}

const mapStateToProps = state =>({
  state
})

export default connect(mapStateToProps, mapDispatchToProps)(MatchBoard)