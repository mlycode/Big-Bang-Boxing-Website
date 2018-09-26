import React from "react";

import "./Heading.css";

const heading = (props) => (
    <h2 className="Heading">{props.children}</h2>
);

export default heading;