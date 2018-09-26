import React from "react";

import "./Body.css";

const body = (props) => (
    <div className="Body">
        <p>{props.paragraphOne}</p>
        <p>{props.paragraphTwo}</p>
        <p>{props.paragraphThree}</p>
    </div>
);

export default body;