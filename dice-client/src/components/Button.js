import React from 'react';
import { rollTime } from '../services';
import PropTypes from 'prop-types';

const Button = ({ button, text, callback, setter, timeRoll, idVal }) => <button onClick={() => setter(rollTime(timeRoll, callback, button))} className="dice-button" id={idVal}>{text}</button>;

Button.propTypes = {
  button: PropTypes.number,
  text: PropTypes.string,
  setter: PropTypes.func.isRequired,
  idVal: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  callback: PropTypes.func.isRequired,
  timeRoll: PropTypes.number
}

export default Button;
