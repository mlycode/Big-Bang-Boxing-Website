import React, { Fragment } from "react";

// import Navbar from "../../components/Navigation/Navbar";
import Navbar from "../../components/BSNavbar";

const layout = ( props ) => (
    <Fragment>
        <Navbar />
        <main>
            {props.children}
        </main>
    </Fragment>
);

export default layout;