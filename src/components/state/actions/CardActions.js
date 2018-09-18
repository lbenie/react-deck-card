import { getCards } from '../../../services/card/CardService';

export const FETCH_CARDS = 'FETCH_CARDS';
export const FETCH_CARDS_PENDING = 'FETCH_CARDS_PENDING';
export const FETCH_CARDS_FULFILLED = 'FETCH_CARDS_FULFILLED';
export const FETCH_CARDS_REJECTED = 'FETCH_CARDS_REJECTED';


const fetchCardsValuesAction = () => ({
  type: FETCH_CARDS,
  payload: getCards()
});


export { fetchCardsValuesAction as fetchCards };
