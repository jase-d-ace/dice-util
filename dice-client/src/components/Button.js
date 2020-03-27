import React from 'react';
import { rollTime } from '../services'

const Button = ({ button, text, callback, setter, timeRoll }) => <button onClick={() => setter(rollTime(timeRoll, callback, button))}>{text}</button>

export default Button;
