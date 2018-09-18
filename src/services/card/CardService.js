import cards from './cards.json';

const simulateError = false;

const mapSuitToValues = cards => {
  const deck = [];

  for (let suit of cards.suits) {
    for (let value of cards.values) {
      deck.push({suit, value});
    }
  }

  return deck;
};

export const getCards = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (simulateError) {
        reject('Failed to fetch list of cards');
      } else {
        resolve(mapSuitToValues(cards));
      }
    }, 1000);
  });
};
