// roll a bunch of the same dice and return an array of four
const rollStatLine = diceType => [Math.ceil(Math.random() * diceType), Math.ceil(Math.random() * diceType), Math.ceil(Math.random() * diceType), Math.ceil(Math.random() * diceType)];

// roll a bunch of the same dice a bunch of times and return an array of the amount of times
const rollTime = (times, cb, cbArg) => {
  let holder = [];

  for (let i = 1 ; i <= times ; i++) {
    if (typeof(cb(cbArg)) == 'object') {
      let fourVals = cb(cbArg);
      let threeVals = fourVals.sort((a,b) => a > b);
      const [least, ...rest] = threeVals;
      holder.push(rest);
    } else {
      holder.push(cb(cbArg));
    }
  };
  console.log('final object...', holder)
  return holder;
};


module.exports = {
  rollStatLine,
  rollTime
}
