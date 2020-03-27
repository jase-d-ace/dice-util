import React from 'react';
import { rollTime } from '../services'

const Button = props => <button onClick={() => rollTime(props.timeRoll, props.callback, props.button)}>{props.text}</button>

export default Button;
