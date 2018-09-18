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
