// which cards are face up, face down. Which are currently matched. image links

import alvarado_mariko from './../assets/alvarado_mariko.jpeg'
import ayoub_dina from './../assets/ayoub_dina.jpeg'
import barcenas_ricardo from './../assets/barcenas_ricardo.jpg'
import billakanti_sowmya from './../assets/billakanti_sowmya.jpg'
import brown_aysia from './../assets/brown_aysia.jpg'
import burris_stacy from './../assets/burris_stacy.jpg'
import cintron_garrett from './../assets/cintron_garrett.jpg'
import cox_nathan from './../assets/cox_nathan.jpg'
import eivy_lena from './../assets/eivy_lena.jpg'
import martin_andre from './../assets/martin_andre.jpg'
import moore_ashley from './../assets/moore_ashley.jpeg'
import myers_tina from './../assets/myers_tina.jpg'
import panek_simon from './../assets/panek_simon.jpg'
import penning_jeremy from './../assets/penning_jeremy.jpeg'
import ravenmoore_matt from './../assets/ravenmoore_matt.jpg'
import ringer_tahmina from './../assets/ringer_tahmina.jpeg'
import strasner_sara from './../assets/strasner_sara.jpg'

let initialState = {
  currentBoard: [], // store the cards/images that were selected for this particular game. Each card should be an object `{ cardID: ###, cardPath: 'folder/place', faceUp: bool, matched: bool }
  // gameStartTime: '', //time stamp the first card flip
  // gameEndTime: '', //time stamp the final match flip
  // gameMoves: 0,
  // gameNumber: 0
  gameWon: false
}

const images = [
  { cardID: 1, pairID: 1, cardPath: alvarado_mariko, faceUp: false, matched: false },
  { cardID: 2, pairID: 2, cardPath: ayoub_dina, faceUp: false, matched: false },
  { cardID: 3, pairID: 3, cardPath: barcenas_ricardo, faceUp: false, matched: false },
  { cardID: 4, pairID: 4, cardPath: billakanti_sowmya, faceUp: false, matched: false },
  { cardID: 5, pairID: 5, cardPath: brown_aysia, faceUp: false, matched: false },
  { cardID: 6, pairID: 6, cardPath: burris_stacy, faceUp: false, matched: false },
  { cardID: 7, pairID: 7, cardPath: cintron_garrett, faceUp: false, matched: false },
  { cardID: 8, pairID: 8, cardPath: cox_nathan, faceUp: false, matched: false },
  { cardID: 9, pairID: 9, cardPath: eivy_lena, faceUp: false, matched: false },
  { cardID: 10, pairID: 10, cardPath: martin_andre, faceUp: false, matched: false },
  { cardID: 11, pairID: 11, cardPath: moore_ashley, faceUp: false, matched: false },
  { cardID: 12, pairID: 12, cardPath: myers_tina, faceUp: false, matched: false },
  { cardID: 13, pairID: 13, cardPath: panek_simon, faceUp: false, matched: false },
  { cardID: 14, pairID: 14, cardPath: penning_jeremy, faceUp: false, matched: false },
  { cardID: 15, pairID: 15, cardPath: ravenmoore_matt, faceUp: false, matched: false },
  { cardID: 16, pairID: 16, cardPath: ringer_tahmina, faceUp: false, matched: false },
  { cardID: 17, pairID: 17, cardPath: strasner_sara, faceUp: false, matched: false }
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

const generateRandomGame = (images) => { // Takes in images from preloaded array.
  let imageList = [];
  let randomArray = getRandomIntegers(images.length - 1); // Uses a helper function to create an array of random numbers between 1 and the length of the images array.

  randomArray.forEach(number => { //uses the random numbers to assign images to the new board
    imageList.push(images[number]);
  });

  let imageList2 = imageList.map(image => {
    return { ...image, cardID: image.cardID + 100 };
  });

  let duplicateList = imageList.concat(imageList2); //duplicates the random 8 images into a single array 

  console.log('GAME-STATE | Duplicate List ', { duplicateList });

  // This loop mixes the duplicate list up.
  for (let i = duplicateList.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * i);
    const temp = duplicateList[i];
    duplicateList[i] = duplicateList[j];
    duplicateList[j] = temp;
  }
  return duplicateList;
}

const getRandomIntegers = (high) => { // creates an array of 8 random integers between 1 and the number of pictures inclusive
  let randomArray = [];
  while (randomArray.length < 8) {
    let temp = Math.floor(Math.random() * (high + 1));
    if (randomArray.indexOf(temp) === -1) randomArray.push(temp);
  }
  return randomArray;
}

const gameSwitchboard = (state = initialState, action) => {
  let { type, payload } = action;
  switch (type) {
    case 'NEW-GAME':
      let newGame = generateRandomGame(images); //generate a new game board with 8 unique cards in 16 random locations
      return { currentBoard: newGame, gameWon: false }; //need to return random currentBoard

    // case 'INCREMENT-MOVE':
    //   return state; //need to return updated gameMoves

    case 'FLIP-CARD':
      //TODO: check if current card is flipped, if yes do nothing

      //- if a new match leave card face up and change to matched
      //- if not a match then flip both cards after 2 seconds

      console.log('GAME-STATE Flip-card', { payload });
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
        return (payload.cardID === card.cardID) ? { ...card, faceUp: true } : card;
      });
        
      // check if any other card is flipped but not currently matched, if yes check for match, if no just flip card
      let matchID;
      let gameBoard2 = updatedGameBoard.map(card => {
        if (card.faceUp === true && payload.cardID !== card.cardID) {
          console.log('CHECKING FACEUP CARD'); 
          if (payload.pairID === card.pairID) {
            console.log('CHANGING FACEUP PAIRED CARD TO TRUE');
            matchID = card.pairID;
            return { ...card, matched: true };
          } else {
            return card;
          }
        } return card;
      })

      console.log({matchID});

      let gameBoard3 = gameBoard2.map(card => {

        if(card.cardID === payload.cardID && card.faceUp === true && card.pairID === matchID) {
          console.log('flip pair matched to true')
          return { ...card, matched: true };
        }
        // if(card.pairID === payload.pairID && card.cardID === payload.cardID - 100 && card.faceUp === true) {
        //   console.log('-100 flip pair matched to true')
        //   return { ...card, matched: true };
        // }
          else {
            return card;
          }
      });

      console.log({gameBoard3});
      

      console.log('State.currentBoard:', state.currentBoard);

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


      console.log('GAME-STATE gameSwitchboard ', { updatedGameBoard });

      return { ...state, currentBoard: gameBoard3 }; //should update the state of the card clicked on 
    // return state;

    case 'CHECK-GAME-WON':
      //TODO: check if all images matched: true
      let gameCheck = state.currentBoard.map(card => {
        return (card.matched === false) ? false : true;
      })

      console.log('GAME-STATE gameSwitchboard: ')

      return { ...state, gameWon: gameCheck }; //updated the gameWon state

    case 'RESET':
      return initialState;

    default:
      return state;
  }
}

export default gameSwitchboard;
