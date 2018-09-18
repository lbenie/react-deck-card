import { combineReducers } from 'redux';

import { FetchCardsReducer } from '../reducers/fetchCardsReducer';
import { DeckReducer } from '../reducers/deckReducer';

export const AppReducer = combineReducers({
  cards: FetchCardsReducer,
  deck: DeckReducer
});
