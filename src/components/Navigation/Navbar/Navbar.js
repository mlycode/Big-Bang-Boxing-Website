import React from "react";
import { Grid } from "react-bootstrap";

import NavigationItems from "../NavigationItems";
import "./Navbar.css";

const navbar = (props) => (
    <Grid className="Navbar">
        <nav>
            <NavigationItems />
        </nav>
    </Grid>
);

export default navbar;