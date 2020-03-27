import React, { useState } from 'react';
import './App.css';
import Button from './components/Button';
import * as constants from './constants';
import * as services from './services';

function App() {
  // state values
  const [fizz, setFizz] = useState("Fizz");
  const [diceRolls, setDiceRolls] = useState([]);
  const [rollNumber, setRollNumber] = useState(constants.DEFAULT_ROLL);
  const advantage = rollNumber ? 1 : 2;

  console.log('rendering...')

  function handleChange(value) {
    setDiceRolls(value)
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>{diceRolls.length > 0 ? diceRolls.join(' | ') : fizz}</h1>
        <p>
          <code>{rollNumber === constants.DEFAULT_ROLL ? "Rolling Normally" : "Rolling at Advantage"}</code>
        </p>
        <button onClick={() => setRollNumber(!rollNumber)}>{rollNumber ? "Roll at Advantage" : "Roll Normally"}</button>
      <Button timeRoll={advantage} button={constants.D_20} text="Roll a D20" callback={services.rollDice} setter={handleChange} />
      <Button timeRoll={constants.STAT_GENERATION_LOOP} button={constants.D_6} callback={services.rollStatLine} setter={handleChange} text="Roll a new character" />
      </header>
    </div>
  );
}

export default App;
