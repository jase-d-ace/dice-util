import React, { useState } from "react";
import { Link } from "react-router-dom";
import Hamburger from "./Hamburger";

export default function Nav() {
    const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);

    const toggleHamburger = () => setIsHamburgerOpen(!isHamburgerOpen)
    return (
        <nav className="nav">
            <div className="mobile-nav" onClick={toggleHamburger}>
                <Hamburger isHamburgerOpen={isHamburgerOpen} />
                <span class="nav-site-header">Roll Some Dice</span>
            </div>
            <ul className="navigation">
                <span className="nav-site-header">Roll Some Dice</span>
                {
                    [{destination: "/", name: "Dice"}, {destination: "/search", name: "Monsters"}, {destination: "/initiatives", name: "Inititatives"}].map(
                        ({ destination, name }) => (
                            <li className="link"><Link to={destination}>{name}</Link></li>
                        )
                    )
                }
            </ul>
        </nav>
    );
};
