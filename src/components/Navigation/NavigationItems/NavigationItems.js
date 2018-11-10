import React from "react";

import NavigationItem from "./NavigationItem";
import "./NavigationItems.css";

const navigationItems = (props) => (
    <ul className="NavigationItems">
        <NavigationItem link="/">Home</NavigationItem>
        <NavigationItem link="/classes">Classes</NavigationItem>
        <NavigationItem link="/gallery">Gallery</NavigationItem>
        <NavigationItem link="/contact">Contact</NavigationItem>
        <NavigationItem link="/location">Location</NavigationItem>
    </ul>
);

export default navigationItems;