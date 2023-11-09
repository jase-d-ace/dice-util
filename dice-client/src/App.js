import React, { useState } from 'react';
import d20 from './images/d20.png';
import './App.css';
import Button from './components/Button';
import * as constants from './constants';
import { rollDice, rollStatLine } from './services';

function App() {
  // state values
  const [diceRolls, setDiceRolls] = useState([]);
  const [rollNumber, setRollNumber] = useState(constants.DEFAULT_ROLL);

  // advantage roll toggle
  const advantage = rollNumber ? 1 : 2;

  const buttonArray = [constants.D_20, constants.D_4, constants.D_6, constants.D_8, constants.D_10, constants.D_12];

  /**
   * helper function to add stat-line dice rolls instead of individual values
   * since diceRolls is an array of arrays, this function uses two iterators to return an array of numbers instead
   * 
   * @name sumStatNumbers
   * @param {array} arr array of arrays that get individually summed
   */
  function sumStatNumbers(arr) {
    return arr.map(subArr => subArr.reduce((agg, rec) => agg += rec), 0)
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={d20} className="App-logo" alt="logo" />
        <h1>{diceRolls.length > 0 ? diceRolls.length === 6 ? sumStatNumbers(diceRolls).join(' | ') : diceRolls.join(' | ') : "Roll Some Dice!"}</h1>
        <p>
          <code>{rollNumber === constants.DEFAULT_ROLL ? "Rolling Normally" : "Rolling at Advantage"}</code>
        </p>
        <div className="button-container">
          <button className={`dice-button ${rollNumber ? "" : "roll-advantage"}`} id="advantage" onClick={() => setRollNumber(!rollNumber)}></button>
          {
            buttonArray.map(
              constant => <Button timeRoll={advantage} button={constant} text="" key={constant} idVal={constant} callback={rollDice} setter={setDiceRolls} />
            )
          }
          <Button timeRoll={constants.STAT_GENERATION_LOOP} button={constants.D_6} callback={rollStatLine} setter={setDiceRolls} idVal="new-character" text="" />
        </div>
      </header>
    </div>
  );
}

export default App;
