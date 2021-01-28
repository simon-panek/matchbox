import {createStore, combineReducers} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';

import dashboard from './dashboard-reducer';
import gameState from './game-state';
// import reducer from './reducerfile';

let reducers = combineReducers({ dashboard, gameState })

const store = ()=>{
  return createStore(reducers, composeWithDevTools());
}

export default store();