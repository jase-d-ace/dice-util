import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {
  return (
    <nav className="nav">
      <li className="link"><Link to="/">Dice</Link></li>
      <li className="link"><Link to="/search">Monsters</Link></li>
    </nav>
  );
};

export default Nav;
