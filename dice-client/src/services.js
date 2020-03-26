// roll a single die of any type and return the result
export const rollDice = diceType => Math.ceil(Math.random() * diceType);

// roll a single die multiple times and return an array of length 4 with die rolls
export const rollStatLine = diceType => [Math.ceil(Math.Random() * diceType), Math.ceil(Math.Random() * diceType), Math.ceil(Math.Random() * diceType), Math.ceil(Math.Random() * diceType)];

// roll a die or multiple dice at the same time
// arguments will generally be supplied from the constants file
/* arguments: 
 * times: generally will either be 2 or 6, depending on reason to roll multiple times. 2 for advantage, 6 for character stat generation
 * cb: callback function dictating whether to roll a single die, or a series of d6
 * cbArg: the type of die rolled
*/
export const rollTime = (times, cb, cbArg) => {
  // empty array to hold values
  let holder = [];

  for (let i = 1 ; i <= times ; i++) {
    // when rolling stats for a character (using statLine function), follow dnd character building rules of roll-4d6-drop-lowest
    if (typeof(cb(cbArg)) == 'object') {
      let threeVals = cb(cbArg).sort((a, b) => a > b);

      const [least, ...rest] = threeVals;

      // end result is an array of arrays of length 3 after receiving an argument of array length 4.
      holder.push(rest);
    } else { // when rolling at (dis)advantage, simply roll twice and return the results
      holder.push(cb(cbArg));
    };
  };
  return holder;
};
