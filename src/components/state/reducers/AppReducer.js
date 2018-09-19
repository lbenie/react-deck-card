import { combineReducers } from 'redux';

import { DeckReducer } from '../reducers/deckReducer';

export const AppReducer = combineReducers({
  deck: DeckReducer
});
