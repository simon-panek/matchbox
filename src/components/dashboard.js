//timer, moves, reset

import {connect} from 'react-redux';
// import {reducerFunctions} from '/reducers/'
// import {reducerFunctions} from '/reducers/'

//reducer functions go here
const mapDispatchToProps = {};

function Dashboard(props){


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

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)