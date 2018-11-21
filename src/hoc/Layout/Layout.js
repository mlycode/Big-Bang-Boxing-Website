import React, { Fragment } from "react";

import Navbar from "../../components/BSNavbar";
import Footer from "../../components/Footer";

const layout = ( props ) => (
    <Fragment>
        <Navbar />
        <main>
            {props.children}
        </main>
        <Footer>
            Made with &#x2764; - mlycode
        </Footer>
    </Fragment>
);

export default layout;