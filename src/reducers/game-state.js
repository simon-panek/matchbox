// which cards are face up, face down. Which are currently matched. image links

let initialState = {
  currentBoard: [], // store the cards/images that were selected for this particular game. Each card should be an object `{ cardID: ###, cardPath: 'folder/place', faceUp: bool, matched: bool }
  gameStartTime: '', //time stamp the first card flip
  gameEndTime: '', //time stamp the final match flip
  gameMoves: 0,
  gameNumber: 0, 
  images: [
    { cardID: 1, cardPath: 'public/assets/alvarado_mariko.jpeg' }, 
    { cardID: 2, cardPath: 'public/assets/ayoub_dina.jpeg' }, 
    { cardID: 3, cardPath: 'public/assets/barcenas_ricardo.jpg' }, 
    { cardID: 4, cardPath: 'public/assets/billakanti_sowmya.jpg' }, 
    { cardID: 5, cardPath: 'public/assets/brown_aysia.jpg' }, 
    { cardID: 6, cardPath: 'public/assets/burris_stacy.jpg' }, 
    { cardID: 7, cardPath: 'public/assets/cintron_garrett.jpg' }, 
    { cardID: 8, cardPath: 'public/assets/cox_nathan.jpg' }, 
    { cardID: 9, cardPath: 'public/assets/eivy_lena.jpg' }, 
    { cardID: 10, cardPath: 'public/assets/martin_andre.jpg' }, 
    { cardID: 11, cardPath: 'public/assets/moore_ashley.jpeg' }, 
    { cardID: 12, cardPath: 'public/assets/myers_tina.jpg' }, 
    { cardID: 13, cardPath: 'public/assets/panek_simon.jpg' }, 
    { cardID: 14, cardPath: 'public/assets/penning_jeremy.jpeg' }, 
    { cardID: 15, cardPath: 'public/assets/ravenmoore_matt.jpeg' }, 
    { cardID: 16, cardPath: 'public/assets/ringer_tahmina.jpeg' }, 
    { cardID: 17, cardPath: 'public/assets/strasner_sara.jpg' } 
  ]
}

export const newGame = () => {
  return {
    type: 'NEW-GAME',
  }
}

// probably not needed
// export const incrementMoveCount = () => {
//   return {
//     type: 'INCREMENT-MOVE'
//   }
// }

export const flipCard = (cardID) => {
  return {
    type: 'INCREMENT-MOVE'
  }
}

export const resetBoard = () => {
  return {
    type: 'RESET'
  }
}





const gameSwitchboard = (state=initialState, action) => {
  let { type, payload } = action;
  switch (type) {
    case 'NEW-GAME':

      return state; //need to return random currentBoard, increment gameCount
    
    case 'INCREMENT-MOVE':

      return state; //need to return updated gameMoves

    case 'RESET':
      return initialState; //should not reset the gameCount

    default:
      return state;
  }
}