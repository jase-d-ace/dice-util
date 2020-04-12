// roll a single die of any type and return the result
export const rollDice = diceType => Math.ceil(Math.random() * diceType);

// roll a single die multiple times and return an array of length 4 with die rolls
export const rollStatLine = diceType => [Math.ceil(Math.random() * diceType), Math.ceil(Math.random() * diceType), Math.ceil(Math.random() * diceType), Math.ceil(Math.random() * diceType)];

// roll a die or multiple dice at the same time
// arguments will generally be supplied from the constants file
/* arguments: 
 * times: generally will either be 2 or 6, depending on reason to roll multiple times. 2 for advantage, 6 for character stat generation
 * cb: callback function dictating whether to roll a single die, or a series of d6
 * cbArg: the type of die rolled
*/

const checkSeven = (num) => num > 7;

const reRoll = (newArr) => {
  let newStatLine = [rollDice(6), rollDice(6), rollDice(6), rollDice(6)].sort((a, b) => a > b);
  //eslint-disable-next-line
  const [least, ...highest] = newStatLine;
  const temp = highest.reduce((a, b) => a + b, 0);
  if (checkSeven(temp)) {
    newArr.push(highest);
    return true;
  }
  return false;
}

export const rollTime = (times, cb, cbArg) => {
  // empty array to hold values
  let holder = [];

  for (let i = 1 ; i <= times ; i++) {
    // when rolling stats for a character (using statLine function), follow dnd character building rules of roll-4d6-drop-lowest
    if (typeof(cb(cbArg)) == 'object') {
      let threeVals = cb(cbArg).sort((a, b) => a > b);

      // eslint-disable-next-line
      const [least, ...rest] = threeVals;
      
      let tempTotal = rest.reduce((a, b) => a + b, 0);
      let tempArray = [];
      let found = false;

      while (found === false) {
        if (checkSeven(tempTotal)) {
          tempArray.push(rest);
          found = true;
        } else {
          found = reRoll(tempArray);
        }
      }
      // end result is an array of arrays of length 3 after receiving an argument of array length 4.
      holder.push(tempArray);
    } else { // when rolling at (dis)advantage, simply roll twice and return the results
      holder.push(cb(cbArg));
    };
  };
  return holder;
};
