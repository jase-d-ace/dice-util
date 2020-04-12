// roll a single die of any type and return the result
export const rollDice = diceType => Math.ceil(Math.random() * diceType);

// roll a single die multiple times and return an array of length 4 with die rolls
// this version of the function re-rolls any 1s that come up so that you have a little bit more luck with rolling characters
export const rollStatLine = diceType => {

  const statLine = [];

  while (statLine.length < 4) {
    const randomNumber = Math.ceil(Math.random() * diceType);
    if (randomNumber > 1) {
      statLine.push(randomNumber);
    };
  };

  return statLine;
};
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

      // eslint-disable-next-line
      const [least, ...rest] = threeVals;

      // end result is an array of arrays of length 3 after receiving an argument of array length 4.
      holder.push(rest);
    } else { // when rolling at (dis)advantage, simply roll twice and return the results
      holder.push(cb(cbArg));
    };
  };
  return holder;
};
