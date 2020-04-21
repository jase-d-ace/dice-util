import _ from 'underscore';
/**
 * roll a die of any type
 *
 * @param {number} diceType the size of the die you rolled
 * @returns {number} the number you rolled on your die
 */
export const rollDice = diceType => Math.ceil(Math.random() * diceType);

/**
 * return an array of random numbers between 1 and your number (i.e. your dice)
 *
 * @param {number} diceType the size of the dice you roll
 * @returns {array} array of numbers between 1 and your dice type
 */
export const rollStatLine = diceType => [rollDice(diceType), rollDice(diceType), rollDice(diceType), rollDice(diceType)];

/**
 * Check if a number is greater than 7
 *
 * @param {number} num number to compare against 7
 * @returns {boolean} returns true if the number is greater than 7
 */
const checkSeven = (num) => num > 7;

/**
 * redo the roll algorithm
 *
 * @param {array} newArr holder array that eventually holds acceptable arrays that total over 7
 * @returns {boolean} returns true if it finds an acceptable array to push into a holder
 */
const reRoll = (newArr) => {
  let newStatLine = rollStatLine(6).sort((a, b) => a > b);
  
  //eslint-disable-next-line
  const [least, ...highest] = newStatLine;

  return checkRolls(highest, newArr);
};

/**
 * take an array of numbers, add them together, and keep the array if the total is over 7
 *
 * @param {array} arr array of numbers to add together to check the sum
 * @param {array} holder holder array to return numbers if they are acceptable
 * @returns {boolean} returns true and pushes numbers into an array if they total more than 7, returns false otherwise
 */
const checkRolls = (arr, holder) => {
  const sum = arr.reduce((a, b) => a + b, 0);

  if (checkSeven(sum)) {
    holder.push(arr);
    return true;
  }

  return false;
};

/**
 * roll dice multiple times
 *
 * @param {number} times number of times you roll dice
 * @param {function} cb callback that rolls either an array or just a number
 * @param {number} cbArg number representing the type of die rolled
 * @returns {array} results from rolling dice
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
      
      // check to see if this iteration holds a value greater than 7
      // if this iteration is greater than 7, push it straight into the holder and move on
      // if not, the function will not continue until it rolls 3 numbers that add to more than 7
      let found = checkRolls(rest, holder);

      while (!found) {
        found = reRoll(holder);
      }
    } else { // when rolling at (dis)advantage, simply roll twice and return the results
      holder.push(cb(cbArg));
    };
  };
  return holder;
};

/**
 * event handler to change state
 *
 * @name handleInputChange
 * @function
 * @param {function} cb callback to handle state change
 * @param {string} val string to set state
 */
export const handleInputChange = (cb, val) => (_.debounce(() => cb(val), 70))() //IIFE that debounces a state change every 70ms

/**
 * event handler to handle nested object state
 *
 * @name handleFormChange
 * @function
 * @param {function} cb callback to handle state change
 * @param {object} e event object
 * @param {object} state state object being updated
 */
export const handleFormChange = (cb, e, state) => {
  const { name, value } = e.target;
  cb({
    ...state,
    [name]: value
  })
}

/**
 * event handler to submit a form
 *
 * @name handleFormSubmit
 * @function
 * @param {object} e event object
 * @param {string} query name of monster being searched
 * @param {function} callback callback that processes incoming data from the api
 */
export const handleFormSubmit = (e, query, callback) => {
  e.preventDefault();

  let wordsArray = query.split(' ');
  let cleanQuery = wordsArray.join('-');

  fetch(`https://api.open5e.com/monsters/${cleanQuery}/?format=json`)
    .then( data => data.json() )
    .then( json => callback(json) )
    .catch( err => console.log(err) );
  e.target.reset();
};

export const handleInitiativeOrder = (e, callback, cbArg) => {
  if (e != null) {
    e.preventDefault();
    e.target.reset();
  }
  callback(cbArg);
}

/**
 * redux-style reducer to mutate state in different ways
 *
 * @name reducer
 * @function
 * @param {object} state state object being updated
 * @param {object} action type to dictate what action to take, character in question
 * @returns {object} new state returned after changes
 */
export const reducer = (state, action) => {
  const { type, character } = action;
  switch(type) {
    case "add": //adds character to initiative, returns sorted in descending order
      const temp = [...state, {charName: character.charName, initiative: Number(character.initiative)}];
      return _.sortBy(temp, 'initiative').reverse();
    case "remove": // removes character from initiative order
      const newState = _.reject(state, char => action.character.charName === char.charName);
      return [...newState];
    default: 
      return state;
  }
}
