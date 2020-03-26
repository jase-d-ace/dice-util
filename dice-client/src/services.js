export const rollDice = diceType => Math.ceil(Math.random() * diceType);

export const rollStatLine = diceType => [Math.ceil(Math.Random() * diceType), Math.ceil(Math.Random() * diceType), Math.ceil(Math.Random() * diceType), Math.ceil(Math.Random() * diceType)];

export const rollTime = (times, cb, cbArg) => {
  let holder = [];

  for (let i = 1 ; i <= times ; i++) {
    if (typeof(cb(cbArg)) == 'object') {
      let threeVals = cb(cbArg).sort((a, b) => a > b);

      const [least, ...rest] = threeVals;

      holder.push(rest);
    } else {
      holder.push(cb(cbArg));
    };
  };
  return holder;
};
