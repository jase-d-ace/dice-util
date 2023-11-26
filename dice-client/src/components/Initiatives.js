import React, { useState, useReducer } from 'react';
import NamePlate from './NamePlate';
import helmet from '../images/helmet.png';
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
                    <div className="initiatives-container">
                    {order.length ? <ul>{order.map((char, i) => <NamePlate setOrder={setOrder} key={i} char={char} />)}</ul> : (<img src={helmet} className="App-logo" alt="logo" />)
                    }
                    <h1>Sort Initiatives!</h1>
                    <div className="form-container initiatives">
                        <form className="initiatives-form" onSubmit={(e) => handleInitiativeOrder(e, setOrder, { character, type: "add" })}>
                            <input type="text" name="charName" required placeholder="name of character" onChange={(e) => handleFormChange(setCharacter, e, character)} />
                            <input type="number" name="initiative" onChange={(e) => handleFormChange(setCharacter, e, character)} required min="0" max="30" placeholder="initiative" step="1" />
                            <input type="submit" value="Add to Initiative!" />
                        </form>
                    </div>
                </div>
            </header>
        </div>
    );
};

export default Initiatives;
