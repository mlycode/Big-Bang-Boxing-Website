import React, { Fragment } from "react";

import "./Footer.css";

const Footer = (props) => (
    <Fragment>
        <div className="footer-container">
            <p>{props.children}</p>
        </div>
    </Fragment>
);

export default Footer;