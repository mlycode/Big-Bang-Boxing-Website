import React from "react";

import NavigationItems from "../NavigationItems";
import "./Navbar.css";

const navbar = (props) => (
    <header className="Navbar">
        <nav>
            <NavigationItems />
        </nav>
    </header>
);

export default navbar;