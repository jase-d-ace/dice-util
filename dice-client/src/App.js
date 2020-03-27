import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Button from './components/Button';
import * as constants from './constants';
import * as services from './services';

function App() {
  const [foo, setFoo] = useState('bar')
  const [bar, setBar] = useState({
    fizz: "Buzz"
  })
  const [fizz, setFizz] = useState("Fizz")
  const [diceRolls, setDiceRolls] = useState([])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>{fizz}</h1>
        <p>
          Edit <code>{foo}</code> and save to reload.
          You've got a D{constants.D_20} on hand right now
          <br />
          <button onClick={() => setFoo(bar.fizz)}>Click Me!</button>
        </p>
      <Button timeRoll={constants.ADVANTAGE_DISADVANTAGE} button={constants.D_20} text="Roll with Advantage" callback={services.rollDice} />
      <Button timeRoll={constants.STAT_GENERATION_LOOP} button={constants.D_6} callback={services.rollStatLine} text="Roll a new character" />
      </header>
    </div>
  );
}

export default App;
