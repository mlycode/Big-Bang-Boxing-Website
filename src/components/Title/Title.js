import React from "react";

import "./Title.css";

const title = (props) => (
    <h1 className="Title">{props.children}</h1>
);

export default title;