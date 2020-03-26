const rollMultipleDice = diceType => [Math.ceil(Math.random() * diceType), Math.ceil(Math.random() * diceType), Math.ceil(Math.random() * diceType), Math.ceil(Math.random() * diceType)];

const rollTime = (times, cb, cbArg) => {
  let holder = [];

  for (let i = 0 ; i <= times ; i++) {
    holder.push(cb(cbArg));
  };

  return holder;
};


module.exports = {
  rollMultipleDice,
  rollTime
}
