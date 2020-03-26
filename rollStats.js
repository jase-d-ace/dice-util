// roll a bunch of the same dice and return an array of four
const rollStatLine = diceType => [Math.ceil(Math.random() * diceType), Math.ceil(Math.random() * diceType), Math.ceil(Math.random() * diceType), Math.ceil(Math.random() * diceType)];

// roll a bunch of the same dice a bunch of times and return an array of the amount of times
const rollTime = (times, cb, cbArg) => {
  let holder = [];

  for (let i = 1 ; i <= times ; i++) {
    // type check because javascript lets you do whatever you want.
    // check type of argument in the callback because this is called on either an array or a single number.
    if (typeof(cb(cbArg)) == 'object') {
      // if we're building a statblock, (aka if we are calling this function on an array), drop the lowest number per dnd character-building rules
      let fourVals = cb(cbArg);
      let threeVals = fourVals.sort((a,b) => a > b);
      const [least, ...rest] = threeVals;
      holder.push(rest);
    } else {
      // if we are just rolling with (dis)advantage, just push both rolls into the array
      holder.push(cb(cbArg));
    }
  };
  // in either case, the holder has been populated, and can be safely returned
  return holder;
};


module.exports = {
  rollStatLine,
  rollTime
}
