//results. how many moves, timer, reset

const initialState = {
  gameMoves: 0,
  timer: {
    timerOn: false,
    timerStart: 0,
    timerEnd: 0
  },
  // scorecard: [{ 
  //   gameNumber: 0, 
  //   gameEndTime: '', 
  //   gameMoves: 0 }]
};

// Actions

export const refresh = () => {
  return {
    type: 'REFRESH',
  }
}

export const incrementGameMoves = (event) => {
  return {
    type: 'INCREMENT-MOVES',
    payload: event,
  }
}

export const startTimer = (event) => {
  return {
    type: 'START-TIMER',
    payload: initialState.timer,
  }
}

export const stopTimer = (endTime) => {
  return {
    type: 'STOP-TIMER',
    payload: endTime,
  }
}

const dashboard = (state = initialState, action) => {
  let { type, payload } = action;
    switch (type) {

      case 'START-TIMER':
        return {...state, timer: {...state.timer, timer: state.timerOn = true}};

      // case 'STOP-TIMER',

      case 'INCREMENT-MOVES':
        if(payload.faceUp !== true) {
          return {...state, gameMoves: state.gameMoves + 1};
        };

      case 'REFRESH':
        return initialState;
        

    default:
      return state;
  }
}

export default dashboard;
