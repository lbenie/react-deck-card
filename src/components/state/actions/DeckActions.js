import { dealOneCard, shuffleDeck } from '../../../services/deck/DeckService';

export const SHUFFLE_CARDS = 'SHUFFLE_CARDS';
export const SHUFFLE_CARDS_PENDING = 'SHUFFLE_CARDS_PENDING';
export const SHUFFLE_CARDS_FULFILLED = 'SHUFFLE_CARDS_FULFILLED';
export const SHUFFLE_CARDS_REJECTED = 'SHUFFLE_CARDS_REJECTED';

export const DEAL_ONE_CARD = 'DEAL_ONE_CARD';
export const DEAL_ONE_CARD_PENDING = 'DEAL_ONE_CARD_PENDING';
export const DEAL_ONE_CARD_FULFILLED = 'DEAL_ONE_CARD_FULFILLED';
export const DEAL_ONE_CARD_REJECTED = 'DEAL_ONE_CARD_REJECTED';

const shuffleDeckAction = deck => ({
  type: SHUFFLE_CARDS,
  payload: shuffleDeck(deck)
});

const dealOneCardAction = deck => ({
  type: DEAL_ONE_CARD,
  payload: dealOneCard(deck)
});


export { shuffleDeckAction as shuffleDeck, dealOneCardAction as dealOneCard };
