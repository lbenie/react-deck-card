import { dealOneCard, shuffleDeck, getCards } from '../../../services/deck/DeckService';
import { FETCH_CARDS, SHUFFLE_CARDS, DEAL_ONE_CARD } from './types';

const fetchCardsValuesAction = () => ({
  type: FETCH_CARDS,
  payload: getCards()
});

const shuffleDeckAction = deck => ({
  type: SHUFFLE_CARDS,
  payload: shuffleDeck(deck)
});

const dealOneCardAction = deck => ({
  type: DEAL_ONE_CARD,
  payload: dealOneCard(deck)
});


export { shuffleDeckAction as shuffleDeck, dealOneCardAction as dealOneCard, fetchCardsValuesAction as fetchCards };
