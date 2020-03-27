import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Button from './components/Button';
import * as constants from './constants';
import * as services from './services';

function App() {
  // state values
  const [fizz, setFizz] = useState("Fizz");
  const [diceRolls, setDiceRolls] = useState([]);
  const [rollNumber, setRollNumber] = useState(constants.DEFAULT_ROLL);

  console.log('rendering...')

  function handleChange(value) {
    setDiceRolls(value)
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>{diceRolls.length > 0 ? diceRolls.join(' | ') : fizz}</h1>
        <p>
          Edit <code>{fizz}</code> and save to reload.
        </p>
        <button onClick={() => setRollNumber(constants.ADVANTAGE_DISADVANTAGE)}>Roll Twice</button>
      <Button timeRoll={rollNumber} button={constants.D_20} text="Roll a D20" callback={services.rollDice} setter={handleChange} />
      <Button timeRoll={constants.STAT_GENERATION_LOOP} button={constants.D_6} callback={services.rollStatLine} setter={handleChange} text="Roll a new character" />
      </header>
    </div>
  );
}

export default App;
