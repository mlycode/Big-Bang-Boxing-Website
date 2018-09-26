import React from "react";

const layout = ( props ) => (
    <React.Fragment>
        <p>Home, About, Gallery, Contact and Location</p>
        <main>
            {props.children}
        </main>
    </React.Fragment>
);

export default layout;