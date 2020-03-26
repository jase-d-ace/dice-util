import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import * as constants from './constants';

function App() {
  const [foo, setFoo] = useState('bar')
  const [bar, setBar] = useState({
    fizz: "Buzz"
  })
  const [fizz, setFizz] = useState("Fizz")
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
          <input onChange={(e) => setFizz(e.target.value)} type="text" placeholder="write in me" />
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
