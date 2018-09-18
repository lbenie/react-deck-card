import {
  DEAL_ONE_CARD_FULFILLED,
  DEAL_ONE_CARD_PENDING,
  DEAL_ONE_CARD_REJECTED,
  SHUFFLE_CARDS_FULFILLED,
  SHUFFLE_CARDS_PENDING,
  SHUFFLE_CARDS_REJECTED
} from '../actions/DeckActions';

import { basestate } from './baseState';

const initialState = {
  deck: [],
  picked: {},
  ...basestate
};

export const DeckReducer = (state = initialState, action) => {
  switch(action.type) {
    case DEAL_ONE_CARD_PENDING:
      return {
        ...state,
        ...basestate,
        picked: {},
        fetching: true
      };

    case DEAL_ONE_CARD_FULFILLED:
      return {
        ...state,
        ...basestate,
        picked: action.payload,
        fetched: true
      };

    case DEAL_ONE_CARD_REJECTED:
      return {
        ...state,
        ...basestate,
        picked: {},
        failed: true
      };

    case SHUFFLE_CARDS_PENDING:
      return {
        ...state,
        ...basestate,
        deck: [],
        fetching: true
      };

    case SHUFFLE_CARDS_FULFILLED:
      return {
        ...state,
        ...basestate,
        deck: action.payload,
        fetched: true
      };

    case SHUFFLE_CARDS_REJECTED:
      return {
        ...state,
        ...basestate,
        deck: [],
        failed: true
      };

    default:
      return state;
  }
};
