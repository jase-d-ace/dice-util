import React from 'react';
import { rollTime } from '../services'

const Button = ({ button, text, callback, setter, timeRoll, idVal }) => <button onClick={() => setter(rollTime(timeRoll, callback, button))} className="dice-button" id={idVal}>{text}</button>

export default Button;
