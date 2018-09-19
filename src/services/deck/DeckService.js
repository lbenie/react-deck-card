import cards from './cards.json';

const simulateError = false;

const shuffle = deck => {
  let result = [].concat(deck);

  let counter = result.length;
  let temp;
  let index;

  while (counter > 0) {
    index = Math.floor(Math.random() * counter);

    counter--;

    temp = result[counter];
    result[counter] = result[index];
    result[index] = temp;
  }

  return result;
};

const deal = deck => {
  const newDeck = [].concat(deck);
  const [pick] = newDeck.splice(Math.floor(Math.random() * deck.length), 1);

  return {deck: newDeck, pick};
};

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

export const shuffleDeck = deck => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (simulateError) {
        reject('Failed to shuffle deck');
      } else {
        resolve(shuffle(deck));
      }
    }, 500);
  });
};

export const dealOneCard = deck => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (simulateError) {
        reject('Failed to shuffle deck');
      } else {
        resolve(deal(deck));
      }
    }, 250);
  });
};
