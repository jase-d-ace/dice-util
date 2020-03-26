import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import * as constants from './constants';

function App() {
  const [foo, setFoo] = useState('bar')
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>{foo}</code> and save to reload.
          You've got a {constants.D_20} on hand right now
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
