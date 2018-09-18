import {
  FETCH_CARDS_PENDING,
  FETCH_CARDS_FULFILLED,
  FETCH_CARDS_REJECTED
} from '../actions/CardActions';

import { basestate } from './baseState';

const initialState = {
  cards: [],
  ...basestate
};


export const FetchCardsReducer = (state = initialState, action) => {
  switch(action.type) {
    case FETCH_CARDS_PENDING:
      return {
        ...state,
        ...basestate,
        cards: [],
        fetching: true,
      };
    case FETCH_CARDS_FULFILLED:
      return {
        ...state,
        ...basestate,
        cards: action.payload,
        fetched: true
      };
    case FETCH_CARDS_REJECTED:
      return {
        ...state,
        ...basestate,
        cards: [],
        failed: true
      };
    default:
      return state;
  }
};
