import React, { useState, useReducer } from 'react';
import helmet from '../images/helmet.png'
import { handleFormChange, reducer, handleInitiativeOrder } from '../services';


// useState with prevState callback: 
// https://stackoverflow.com/questions/54150783/react-hooks-usestate-with-object
function Initiatives() {
  const [character, setCharacter] = useState({
    charName: null,
    initiative: null
  });
  const [order, setOrder] = useReducer(reducer, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={helmet} className="App-logo" alt="logo" />
        <h1>Let's Play</h1>
        <div className="form-container">
          <form className="monster-search" onSubmit={(e)=>handleInitiativeOrder(e, setOrder, {character, type: "add"})}>
            <input type="text" name="charName" required placeholder="name of character" onChange={(e) => handleFormChange(setCharacter, e, character)} />
            <input type="number" name="initiative" onChange={(e) => handleFormChange(setCharacter, e, character)} required min="0" max="30" placeholder="initiative" step="1" />
            <input type="submit" value="search!" />
          </form>
        </div>
      </header>
    </div>
  );
};

export default Initiatives;
