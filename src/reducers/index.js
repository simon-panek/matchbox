import {createStore, combineReducers} from 'redux';

import {composeWithDevTools} from 'redux-devtools-extension';

// import reducer from './reducerfile';
// import reducer from './reducerfile';
// import reducer from './reducerfile';

//imported reducers go here
let reducers = combineReducers({  })

const store = ()=>{
  return createStore(reducers, composeWithDevTools());
}

export default store();