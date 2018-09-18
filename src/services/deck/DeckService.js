const simulateError = false;

const shuffle = deck => {
  let result = [];

  let counter = deck.length;
  let temp;
  let index;

  while (counter > 0) {
    index = Math.floor(Math.random() * counter);

    counter--;

    temp = deck[counter];
    result[counter] = deck[index];
    result[index] = temp;
  }

  return result;
};

const deal = deck => {
  const result = [].concat(deck).splice(Math.floor(Math.random() * deck.length), 1);

  return result;
};

export const shuffleDeck = deck => {
  return new Promise((resolve, reject) => {
    if (simulateError) {
      reject('Failed to shuffle deck');
    } else {
      resolve(shuffle(deck));
    }
  });
};

export const dealOneCard = deck => {
  return new Promise((resolve, reject) => {
    if (simulateError) {
      reject('Failed to shuffle deck');
    } else {
      resolve(deal(deck));
    }
  });
};
