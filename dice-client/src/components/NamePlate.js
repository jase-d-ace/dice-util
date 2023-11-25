import React from 'react';
import { handleInitiativeOrder } from '../services';

function NamePlate({ char: { charName, initiative }, setOrder }) {
    return (
        <li className="nameplate">
            Name: {charName} | Initiative: {initiative} | <button className="button" onClick={() => handleInitiativeOrder(null, setOrder, { character: { charName, initiative }, type: "remove" })}>Remove</button>
        </li>
    );
};

export default NamePlate;
