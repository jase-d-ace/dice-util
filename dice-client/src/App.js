import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Button from './components/Button';
import * as constants from './constants';
import * as services from './services';

function App() {
  // state values
  const [fizz, setFizz] = useState("Fizz")
  const [diceRolls, setDiceRolls] = useState([])

  console.log('rendering...')

  function handleChange(value) {
    setDiceRolls(value)
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>{fizz}</h1>
        <p>
          Edit <code>{fizz}</code> and save to reload.
        </p>
      <Button timeRoll={constants.ADVANTAGE_DISADVANTAGE} button={constants.D_20} text="Roll with Advantage" callback={services.rollDice} setter={handleChange} />
      <Button timeRoll={constants.STAT_GENERATION_LOOP} button={constants.D_6} callback={services.rollStatLine} setter={handleChange} text="Roll a new character" />
      </header>
    </div>
  );
}

export default App;
