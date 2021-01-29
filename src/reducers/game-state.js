// which cards are face up, face down. Which are currently matched. image links

let initialState = {
  currentBoard: [], // store the cards/images that were selected for this particular game. Each card should be an object `{ cardID: ###, cardPath: 'folder/place', faceUp: bool, matched: bool }
  // gameStartTime: '', //time stamp the first card flip
  // gameEndTime: '', //time stamp the final match flip
  // gameMoves: 0,
  // gameNumber: 0
  gameWon: false
}

const  images = [
    { cardID: 1, cardPath: '../../public/assets/alvarado_mariko.jpeg', faceUp: false, matched: false }, 
    { cardID: 2, cardPath: '../../public/assets/ayoub_dina.jpeg', faceUp: false, matched: false }, 
    { cardID: 3, cardPath: '../../public/assets/barcenas_ricardo.jpg', faceUp: false, matched: false }, 
    { cardID: 4, cardPath: '../../public/assets/billakanti_sowmya.jpg', faceUp: false, matched: false }, 
    { cardID: 5, cardPath: '../../public/assets/brown_aysia.jpg', faceUp: false, matched: false }, 
    { cardID: 6, cardPath: '../../public/assets/burris_stacy.jpg', faceUp: false, matched: false }, 
    { cardID: 7, cardPath: '../../public/assets/cintron_garrett.jpg', faceUp: false, matched: false }, 
    { cardID: 8, cardPath: '../../public/assets/cox_nathan.jpg', faceUp: false, matched: false }, 
    { cardID: 9, cardPath: '../../public/assets/eivy_lena.jpg', faceUp: false, matched: false }, 
    { cardID: 10, cardPath: '../../public/assets/martin_andre.jpg', faceUp: false, matched: false }, 
    { cardID: 11, cardPath: '../../public/assets/moore_ashley.jpeg', faceUp: false, matched: false }, 
    { cardID: 12, cardPath: '../../public/assets/myers_tina.jpg', faceUp: false, matched: false }, 
    { cardID: 13, cardPath: '../../public/assets/panek_simon.jpg', faceUp: false, matched: false }, 
    { cardID: 14, cardPath: '../../public/assets/penning_jeremy.jpeg', faceUp: false, matched: false }, 
    { cardID: 15, cardPath: '../../public/assets/ravenmoore_matt.jpeg', faceUp: false, matched: false }, 
    { cardID: 16, cardPath: '../../public/assets/ringer_tahmina.jpeg', faceUp: false, matched: false }, 
    { cardID: 17, cardPath: '../../public/assets/strasner_sara.jpg', faceUp: false, matched: false } 
  ]


export const isGameWon = () => { //possibly in a useEffect that runs after every render
  return {
    type: 'CHECK-GAME-WON'
  }
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
    type: 'FLIP-CARD',
    payload: cardID
  }
}

export const resetBoard = () => {
  return {
    type: 'RESET'
  }
}

const generateRandomGame = (images) => { // takes in images from preloaded array
  let imageList = [];

  let randomArray = getRandomIntegers(images.length); //uses helper function to create an array of random numbers between 1 and the length of the images array

console.log('GAME-STATE generateRandomGame ', {randomArray});

  randomArray.forEach (number => { //uses the random numbers to assign images to the new board
    imageList.push(images[number]);
  })

console.log('GAME-STATE generateRandomGame ', {imageList});

  let duplicateList = imageList.concat(imageList); //duplicates the random 8 images into a single array 

console.log('GAME-STATE generateRandomGame ', {duplicateList});

  for (let i = duplicateList.length - 1; i > 0; i--){
    const j = Math.floor(Math.random() * i);
    const temp = duplicateList[i];
    duplicateList[i] = duplicateList[j];
    duplicateList[j] = temp;
  }

  let newGame = duplicateList;

console.log('GAME-STATE generateRandomGame ', {newGame});

  return newGame;
}

const getRandomIntegers = (high) => { // creates an array of 8 random integers between 1 and the number of pictures inclusive
  let randomArray = [];
  while (randomArray.length < 8) {
    let temp = Math.floor(Math.random() * (high +1));
    if(randomArray.indexOf(temp) === -1) randomArray.push(temp);
  }
  return randomArray;
}

const gameSwitchboard = (state=initialState, action) => {
  let { type, payload } = action;
  switch (type) {
    case 'NEW-GAME':
      let newGame = generateRandomGame(images); //generate a new game board with 8 unique cards in 16 random locations
      return {currentBoard: newGame, gameWon: false}; //need to return random currentBoard
    
    // case 'INCREMENT-MOVE':
    //   return state; //need to return updated gameMoves

    case 'FLIP-CARD':
      //TODO: check if current card is flipped, if yes do nothing
      //- check if any other card is flipped but not currently matched, if yes check for match, if no just flip card
      //- if a new match leave card face up and change to matched
      //- if not a match then flip both cards after 2 seconds

      console.log('GAME-STATE gameSwitchboard ', {payload});
      console.log('current state in FLIP-CARD: ', state)

      // let updatedGameBoard = state.currentBoard.map(card => { // looks through current game board
      //   // console.log('card', card, 'payload', payload);
      //   if(card.cardID !== payload) return card;
      //   if(card.cardID === payload){ //if clicked card matches a card in the game board do the following
      //     // console.log('CARD Matched ', card.cardID); //testing only not part of algo
      //     // return {...card, faceUp: true}; //testing only, this works not part of algo
      //     if(card.faceUP === true) return card; //if the clicked card is already face up, do nothing
      //     if(card.matched === true) return card; //if the card is already matched, do nothing
      //       if(card.faceUp === false) { //if the card is not currently face up do the following
      //         return { ... card, faceUp: true };
      //       }
      //         // return state.currentBoard.map(cardTwo => { //look through all game cards
      //         // if(cardTwo.faceUp === true && cardTwo.matched !== true){ //if another card is faceup and not already matched do the following
      //         //   if(card.cardID === cardTwo.cardID){ //if the clicked card and the faceup card match do the following
      //         //     card.matched = true; //set the clicked card's matched to true
      //         //     card.faceUp = true; //set the clicked card's faceUp to true
      //         //     return; //exit map (this might not be correct)
                
      //         //   } else { //if the clicked card and the face up card do not match do th following
      //         //     card.faceUp = false; //turn clicked card face down
      //         //     cardTwo.faceUp = false; //turn the other card face down
      //         //     return; //exit map (this may be wrong)
      //         //   }
      //         // } else { //if no other card is already face up, leave the clicked card face up
      //         //   card.faceUp = true; 
      //         //   return; //exit map
      //         // }
      //       // })
      //     // }
      //   }
      // })


      // let location;

      //AS WRITTEN: will allow cards to flip back and forth will not check for pairs or game ending solutions
      let updatedGameBoard = state.currentBoard.map((card, idx) => { // looks through current game board
        // console.log('card', card, 'payload', payload);
        if(card.cardID !== payload) return card;
        if(card.cardID === payload){ //if clicked card matches a card in the game board do the following
          // location = idx;
          // console.log('CARD Matched ', card.cardID); //testing only not part of algo
          // return {...card, faceUp: true}; //testing only, this works not part of algo
          if(card.faceUP === true) return card; //if the clicked card is already face up, do nothing
          if(card.matched === true) return card; //if the card is already matched, do nothing
            if(card.faceUp === false) { //if the card is not currently face up do the following
              return { ... card, faceUp: true };
            } else {
              return { ... card, faceUp: false};
            }
          }
       })

      //  if(updatedGameBoard[location].matched !== true){
      //    return 
      //  }
      // console.log('updatedGameBoard[location]', updatedGameBoard[location]);


            // if(card.faceUp === false) { //if the card is not currently face up do the following
            //   return { ... card, faceUp: true };
            // }

              // return state.currentBoard.map(cardTwo => { //look through all game cards
              // if(cardTwo.faceUp === true && cardTwo.matched !== true){ //if another card is faceup and not already matched do the following
              //   if(card.cardID === cardTwo.cardID){ //if the clicked card and the faceup card match do the following
              //     card.matched = true; //set the clicked card's matched to true
              //     card.faceUp = true; //set the clicked card's faceUp to true
              //     return; //exit map (this might not be correct)
                
              //   } else { //if the clicked card and the face up card do not match do th following
              //     card.faceUp = false; //turn clicked card face down
              //     cardTwo.faceUp = false; //turn the other card face down
              //     return; //exit map (this may be wrong)
              //   }
              // } else { //if no other card is already face up, leave the clicked card face up
              //   card.faceUp = true; 
              //   return; //exit map
              // }
            // })
          // }
    

      console.log('GAME-STATE gameSwitchboard ', {updatedGameBoard});

      return { ...state, currentBoard: updatedGameBoard }; //should update the state of the card clicked on 
      // return state;
      
    case 'CHECK-GAME-WON':
      //TODO: check if all images matched: true
      let gameCheck = state.currentBoard.map(card => {
        return (card.matched === false) ? false : true;
      })

      console.log('GAME-STATE gameSwitchboard: ')

      return {...state, gameWon: gameCheck }; //updated the gameWon state

    case 'RESET':
      return initialState;

    default:
      return state;
  }
}

export default gameSwitchboard;