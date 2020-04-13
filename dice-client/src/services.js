// roll a single die of any type and return the result
export const rollDice = diceType => Math.ceil(Math.random() * diceType);

// roll a single die multiple times and return an array of length 4 with die rolls
export const rollStatLine = diceType => [Math.ceil(Math.random() * diceType), Math.ceil(Math.random() * diceType), Math.ceil(Math.random() * diceType), Math.ceil(Math.random() * diceType)];

// helper function to check if a number is greater than 7
// in context, this is to see if a player has rolled less than 7 on any given stat
// it's meant to take out these rolls and allow a "reroll" for any stat that would end up being really bad
const checkSeven = (num) => num > 7;

// function that runs the dice-rolling generator again and calls the check function
const reRoll = (newArr) => {
  let newStatLine = rollStatLine(6).sort((a, b) => a > b);
  
  //eslint-disable-next-line
  const [least, ...highest] = newStatLine;

  return checkRolls(highest, newArr);
};


// bias function that decides whether an array is acceptable (i.e. has a total greater than 7)
// arr is an array of numbers
// holder is an empty array to hold acceptable values
// return value is true if the array is acceptable, and false means it will need to run again
const checkRolls = (arr, holder) => {
  const sum = arr.reduce((a, b) => a + b, 0);
  if (checkSeven(sum)) {
    holder.push(arr);
    return true;
  }
  return false;
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
      
      // empty boolean value that is false initially
      let found = checkRolls(rest, holder);

      while (!found) {
        found = reRoll(holder);
      }
      // end result is an array of arrays of length 3 after receiving an argument of array length 4.
    } else { // when rolling at (dis)advantage, simply roll twice and return the results
      holder.push(cb(cbArg));
    };
  };
  return holder;
};
