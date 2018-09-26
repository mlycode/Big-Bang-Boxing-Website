import React from "react";

import "./Quote.css";

const quote = (props) => (
    <p className="Quote"><em>"{props.quoteBody}"</em> - {props.quoteName}</p>
);

export default quote;