import React from "react";
import { Link } from "react-router-dom";

export default function Hamburger({isHamburgerOpen}) {
    return (
        <div className="hamburger-nav">
            <div className="burgers">
                <div className={`burger-part burger-one ${isHamburgerOpen ? "burger-one-open" : ""}`}></div>
                <div className={`burger-part burger-two ${isHamburgerOpen ? "burger-two-open" : ""}`}></div>
                <div className={`burger-part burger-three ${isHamburgerOpen ? "burger-three-open" : ""}`}></div>
            </div>
            {isHamburgerOpen &&
            <ul className="mobile-nav-dropdown">
                {
                    [{destination: "/", name: "Dice"}, {destination: "/search", name: "Monsters"}, {destination: "/initiatives", name: "Inititatives"}].map(
                        ({destination, name}) => (
                            <div className="mobile-link">
                                <li className="link"><Link to={destination}>{name}</Link></li>
                            </div>
                        )
                    )
                }
            </ul>
            }
        </div>
    )
}