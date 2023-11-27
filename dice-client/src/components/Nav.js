import React, { useState } from "react";
import { Link } from "react-router-dom";
import Hamburger from "./Hamburger";

export default function Nav() {
    const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);

    const toggleHamburger = () => setIsHamburgerOpen(!isHamburgerOpen)
    return (
        <nav className="nav">
            <div className="mobile-nav" onClick={toggleHamburger}>
                <Hamburger />
            </div>
            <ul className={`navigation ${isHamburgerOpen ? "mobile-active" : ""}`}>
                <span className="nav-site-header">Roll Some Dice</span>
                <li className="link"><Link to="/">Dice</Link></li>
                <li className="link"><Link to="/search">Monsters</Link></li>
                <li className="link"><Link to="/initiatives">Initiatives</Link></li>
            </ul>
        </nav>
    );
};
