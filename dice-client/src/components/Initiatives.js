import React, { useState } from 'react';
import helmet from '../images/helmet.png'


// useState with prevState callback: 
// https://stackoverflow.com/questions/54150783/react-hooks-usestate-with-object
function Initiatives() {
  const [character, setCharacter] = useState({
    charName: null,
    initiative: null
  });
  const [order, setOrder] = useState([]);

  return (
    <div className="App">
      <header className="App-header">
        <img src={helmet} className="App-logo" alt="logo" />
        <h1>Let's Play</h1>
        <div className="form-container">
          <form className="monster-search">
            <input type="text" required placeholder="name of character" />
            <input type="submit" value="search!" />
          </form>
        </div>
      </header>
    </div>
  );
};

export default Initiatives;
