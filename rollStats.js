// roll a bunch of the same dice and return an array of four
const rollStatLine = diceType => [Math.ceil(Math.random() * diceType), Math.ceil(Math.random() * diceType), Math.ceil(Math.random() * diceType), Math.ceil(Math.random() * diceType)];

// roll a bunch of the same dice a bunch of times and return an array of the amount of times
const rollTime = (times, cb, cbArg) => {
  let holder = [];

  for (let i = 1 ; i <= times ; i++) {
    holder.push(cb(cbArg));
  };

  return holder;
};


module.exports = {
  rollStatLine,
  rollTime
}
